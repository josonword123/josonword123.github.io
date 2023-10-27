document.getElementById('spin-btn').addEventListener('click', function() {
    var randomDegree = 1440 + (Math.floor(Math.random() * 4) * 90);
    document.getElementById('wheel').style.transform = 'rotate(' + randomDegree + 'deg)';
    setTimeout(function() {
        determinePrize(randomDegree);
    }, 3000);  // 等待轉盤動畫完成後才呼叫
});

function determinePrize(totalDegrees) {
    var finalDegree = totalDegrees % 360;

    // 修正對應的獎項
    if (finalDegree >= 0 && finalDegree < 90) {
        alert('第四獎');
    } else if (finalDegree >= 90 && finalDegree < 180) {
        alert('頭等獎');
    } else if (finalDegree >= 180 && finalDegree < 270) {
        alert('第二獎');
    } else if (finalDegree >= 270 && finalDegree < 360) {
        alert('第三獎');
    }
}

