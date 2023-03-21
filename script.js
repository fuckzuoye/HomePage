//DaoVoice在线对话
(function(i, s, o, g, r, a, m) {
	i["DaoVoiceObject"] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o), m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	a.charset = "utf-8";
	m.parentNode.insertBefore(a, m)
})(window, document, "script", ('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/b6dbddb6.js", "daovoice")
daovoice('init', {
	app_id: "702d5c3d"
});
daovoice('update');

//一言API
fetch('https://v1.hitokoto.cn/?c=d ')
	.then(response => response.json())
	.then(data => {
		const hitokoto = document.getElementById('hitokoto_text')
		hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
		hitokoto.innerText = data.hitokoto
	})
.catch (console.error)