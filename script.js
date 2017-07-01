function sendInvites() {
    friends = document.querySelectorAll(".listSection ul li");
    for (var j = 0; j < friends.length; j++) {
        friends[j].setAttribute("class", "fbProfileBrowserListItem _1sn _1so _1sq");
    }
}
