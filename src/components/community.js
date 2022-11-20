import { Flex } from "@chakra-ui/react";

export default function Community() {
    return(
        <section id="community" className="community h-screen content">

                <div className="content-title">
                    <h1>Community</h1>
                </div>
                <div className="content-text">
                    <a href="https://www.reddit.com/r/NoFap/" target="_blank">
                        <Flex className="community-flex">
                            <img src="https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png"></img>
                            <p>
                                The reddit NoFap community is one of the biggest online communities
                                focussed on fighting compulsive porn addiction.
                            </p>
                        </Flex>
                    </a>
                    <a href="https://nofap.com/" target="_blank">
                        <Flex className="community-flex">
                            <img src="https://nofap.com/wp-content/uploads/2016/11/NF_Logo-only_fullcolor-alpha_1000px.png"></img>
                            <p>
                            NoFap™ is a secular community-centered sexual health platform designed to help you overcome porn addiction, porn overuse, and compulsive sexual behavior. We’re here to help you quit or reduce porn use, improve your relationships, and reach your sexual health goals.
                            </p>
                        </Flex>
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLC4Quo4xw9HtDh5bbs7uK_cSzwxkv30g9" target="_blank">
                        <Flex className="community-flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"></img>
                            <p>
                                This YouTube playlist offers lots of help and support for fighting pornography addiction.
                            </p>
                        </Flex>
                    </a>
            </div>
        </section>
    );
}