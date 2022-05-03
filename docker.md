将default.conf挂载到/etc/nginx/conf.d/default.conf

```
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

	location / {
	    root /usr/share/nginx/html;
	    index index.html index.htm;

	    # 禁止缓存index.html
        if ($request_filename ~* ^.*?.(html|htm)$){
            add_header Cache-Control "no-store";
            expires -1;
        }
    }
}
```

根据设备重定向
https://riptutorial.com/nginx/example/23450/mobile-site-redirection

```javascript
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  document.write("mobile device");
}else{
  // false for not mobile device
  document.write("not mobile device");
}
```