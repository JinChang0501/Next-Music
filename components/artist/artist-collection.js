document.addEventListener('DOMContentLoaded', () => {
    const followButton = document.querySelector('.follow-btn');
    
    followButton.addEventListener('click', () => {
        if (followButton.textContent === '+ 收藏') {
            followButton.textContent = '已收藏';
            // alert('收藏成功');

        } else {
            followButton.textContent = '+ 收藏';
            // alert('取消收藏');

        }
    });
  

    const playButtons = document.querySelectorAll('.play-btn');

        playButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('播放音樂');
        });
    });
});
