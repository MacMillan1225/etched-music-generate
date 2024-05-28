document.getElementById('musicForm').onsubmit = function(event) {
    event.preventDefault(); // 阻止表单提交

    // 获取表单数据
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const link = form.link.value;

    // 处理字符串（这里可以根据需要进行更多处理）
    const resultText = `/give @p etched:etched_music_disc{Pattern: 4b, LabelColor: {Secondary: 16777215, Primary: 16777215}, Music: {Title: '${title}', Author: "${author}", Url: "${link}"}, DiscColor: 5329233}`;

    // 将结果输出到页面上
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = resultText;

    // 显示复制按钮
    const copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'block';

    // 设置复制功能
    copyButton.onclick = function() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(resultText).then(function() {
                // 显示已复制提示
                const copyMessage = document.getElementById('copyMessage');
                copyMessage.style.display = 'block';
                setTimeout(function() {
                    copyMessage.style.display = 'none';
                }, 2000);
            }).catch(function(err) {
                // 复制失败提示
                alert('复制失败: ' + err);
            });
        } else {
            alert('当前浏览器不支持剪贴板功能');
        }
    };
};
