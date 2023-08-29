let currentIndex = 0;
function nextStory() {
    let data = storyData[currentIndex];
    if (data && data.next) {
        currentIndex = data.next[0];
        updateStory(currentIndex);
    } else {
        window.location.href = "minigame_123/chatpter1/blockblaker.html"
    }
}