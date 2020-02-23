function resLoginRedirect(res,url,millstime) {
    res.writeHead(401,{'Content-type' : 'text/html'});
    res.write(`
        <h1>wrong id and password</h1>
        <script>
            setTimeout(() => {
                window.location.href = '${url}';
            },${millstime})
        </script>
        `);
    res.end();
}
module.exports = {
    resLoginRedirect : resLoginRedirect
}
