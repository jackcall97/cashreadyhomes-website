"""Compare built HTML (dist/public) against saved live pages: title, description, canonical, H1."""
import json,sys,os,re
sys.path.insert(0,os.path.dirname(__file__)); from seo_extract import ext
live=json.load(open(sys.argv[1] if len(sys.argv)>1 else '/tmp/live.json'))
urls=[u.strip() for u in open('/tmp/urls.txt') if u.strip()]
res={'ok':0,'mismatch':[], 'missing_build':[], 'missing_live':[]}
for u in urls:
    p=u.replace('https://cashreadyhomeshudsonvalley.com','') or '/'
    key=p.replace('/','_') if p!='/' else '_'
    f='dist/public/'+('index.html' if p=='/' else p[1:]+'.html')
    if not os.path.exists(f): res['missing_build'].append(p); continue
    b=ext(open(f).read())
    if key not in live: res['missing_live'].append(p); continue
    l=live[key]; diffs={k:(l[k],b[k]) for k in ('title','desc','canonical','h1') if l[k]!=b[k]}
    if b['h1count']!=1: diffs['h1count']=(l['h1count'],b['h1count'])
    if diffs: res['mismatch'].append((p,diffs))
    else: res['ok']+=1
print(json.dumps(res,indent=1,ensure_ascii=False))
