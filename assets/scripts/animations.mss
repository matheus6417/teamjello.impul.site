.navigation:onScrollFromTop{
    /* background-color: red */
    +.:is-sticky;
duration:1000;
}

.navigation:onScrollToTop{
    /* background-color: blue */
    -.:is-sticky;
duration:1000;

}

.canvas .sky:readyToAnimate {

    -webkit-animation: rotate 250s infinite linear;
duration:1000;
}