import re,html,json,sys
def ext(s):
    g=lambda p:(lambda m:html.unescape(m.group(1)).strip() if m else None)(re.search(p,s,re.S|re.I))
    h1=re.search(r'<h1[^>]*>(.*?)</h1>',s,re.S|re.I)
    return dict(title=g(r'<title[^>]*>(.*?)</title>'),
      desc=g(r'<meta name="description" content="([^"]*)"'),
      canonical=g(r'<link rel="canonical" href="([^"]*)"'),
      h1=html.unescape(re.sub(r'<[^>]+>','',h1.group(1))).strip() if h1 else None,
      ld=len(re.findall(r'application/ld\+json',s)),
      h1count=len(re.findall(r'<h1[\s>]',s)))
if __name__=='__main__':
    print(json.dumps(ext(open(sys.argv[1]).read()),indent=1))
