使用nginx实现前端跨域

下载地址
1.地址： http://nginx.org/en/download.html
存放目录不能含中文

nginx配置

本应该调用的地址 //api.douban.com/v2/book/search?q=解忧杂货店&tags=12
本地电脑ip：192.168.1.168
本地React工程访问地址：192.168.1.168:404
实现跨域后React工程访问地址：192.168.1.168
实现跨域后豆瓣接口调用的地址： //192.168.1.168/douban/v2/book/search?q=解忧杂货店&tags=12


server {
    listen       80;
    server_name  192.168.1.168;

    location / {
		proxy_pass http://127.0.0.1:404;
		proxy_connect_timeout 600;
		proxy_read_timeout 600;
    }
	
	location /douban {
		rewrite  ^/douban/(.*)$ /$1 break;
	    proxy_pass   https://api.douban.com;
	}
}




start nginx.exe //启动
nginx.exe -s reload //重启
nginx.exe -s stop //快速停止
nginx.exe -s quit //完整有序停止