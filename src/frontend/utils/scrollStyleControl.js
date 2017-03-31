export default function scrollControl() {
    let clipTabs = document.getElementById('cilp-page-tabs-wrapper');
    let slideContacts = document.getElementById('slide-contacts-id');
    let socialNetwork = document.getElementById('social-network-id');


    let scrollHeight = document.documentElement.clientHeight;
    let clipTabsSourceBottom = 230;

    let socialNetworkSourceTop = socialNetwork.getBoundingClientRect().top;
    window.onscroll = function () {
        if( socialNetwork.getBoundingClientRect().top > socialNetworkSourceTop){
           socialNetworkSourceTop = socialNetwork.getBoundingClientRect().top;
        }
        if (clipTabs.classList.contains('fixed-clip-page-tabs') && window.pageYOffset < clipTabsSourceBottom) {
            clipTabs.classList.remove('fixed-clip-page-tabs');
        } else if (window.pageYOffset > clipTabsSourceBottom) {
            clipTabs.classList.add('fixed-clip-page-tabs');
        }

      if (slideContacts.classList.contains('hide-slide-contacts') && (scrollHeight + window.pageYOffset) < socialNetworkSourceTop ) {
            slideContacts.classList.remove('hide-slide-contacts');
        } else if ((scrollHeight+ window.pageYOffset) > socialNetworkSourceTop ) {
            slideContacts.classList.add('hide-slide-contacts');
        }
    };
}