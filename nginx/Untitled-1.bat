# file nano /etc/nginx/conf.d/domains/najarv.com.conf
# for http
server {
    listen      80;
    server_name najarv.com www.najarv.com;
    location / {

                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-NginX-Proxy true;
               proxy_pass http://localhost:4000;
               proxy_redirect off;
        }
}
# nano /etc/nginx/conf.d/domains/najarv.com.ssl.conf
# for https 
server {
    listen   443 ssl http2;
    server_name najarv.com www.najarv.com;
    ssl_certificate      /home/admin/conf/web/najarv.com/ssl/najarv.com.pem;
    ssl_certificate_key  /home/admin/conf/web/najarv.com/ssl/najarv.com.key;
    ssl_stapling on;
    ssl_stapling_verify on;


    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;

        proxy_pass http://localhost:4000;
        proxy_redirect off;

    }
}