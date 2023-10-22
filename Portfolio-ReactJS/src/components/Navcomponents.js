import * as bootstrap from "bootstrap";

const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
});

export function Home() {
    return (
        <div class="con">
            <h1> Hello everyone, I'm ADITYA KUMAR PANDEY, 21BCI0280!</h1>
            <p> This is a sample portfolio website!!! </p>
        </div>
    );
}
export function Project() {
    return (
        <section id="projects">
            <div class="container-md">
                <div class="text-center">
                    <h2>
                        <i class="bi bi-person-workspace"></i>{" "}
                        adityakumar.pandey2021@vitstudent.ac.in
                    </h2>
                    <p class="lead text-muted">
                        Here is the list of some of my small projects!
                    </p>
                </div>

                <div class="row my-5 g-5 justify-content-around align-items-center">
                    <div class="col-lg-6">
                        <div class="accordion" id="projects_list">
                            <div>
                                <h2>Team Bible</h2>
                                <div>
                                    <div>
                                        <p>
                                            Team Bible is a versatile online platform designed to make
                                            team management a breeze for leaders and project managers.
                                            It simplifies the process of selecting and deselecting
                                            team members according to their skills and availability,
                                            streamlines attendance tracking, and provides an
                                            insightful performance analysis dashboard. With these
                                            features, Team Bible equips leaders to enhance team
                                            productivity and foster efficient communication, making it
                                            a vital tool in the arsenal of successful teamwork.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>INFO PORTAL</h2>
                                <div>
                                    <div>
                                        <p>
                                            The Info Portal is a dedicated online platform that serves
                                            as a valuable resource for counselors. It provides them
                                            with access to a wealth of essential information,
                                            resources, and updates that can enhance their ability to
                                            support their clients effectively. Whether it's the latest
                                            research findings, counseling techniques, or resources for
                                            specific issues, the Info Portal is the go-to hub for
                                            counselors to stay informed and offer the best possible
                                            guidance to those they counsel. It plays a pivotal role in
                                            ensuring that counselors are well-equipped and up-to-date
                                            in their field, ultimately benefiting those seeking
                                            counseling services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>SPEEDY</h2>
                                <div>
                                    <div>
                                        <p>
                                            Speedy is your go-to destination for assessing your typing
                                            skills and improving your speed and accuracy. This online
                                            typing test website offers a user-friendly platform that
                                            allows users to measure their typing speed and accuracy in
                                            just a few clicks. With Speedy, you can take timed typing
                                            tests and receive instant feedback on your performance,
                                            including words per minute (WPM) and accuracy percentages.
                                            It's an excellent tool for individuals looking to enhance
                                            their typing skills for work, school, or personal
                                            projects.{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
