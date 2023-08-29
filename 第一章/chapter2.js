let currentIndex = 101;
function nextStory() {
    let data = storyData[currentIndex];
    if (data && data.next) {
        currentIndex = data.next[0];
        updateStory(currentIndex);
    } else {
        window.location.href = "chapter2-end.html";
    }
}
