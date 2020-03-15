/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./background.css";
import "./text.css";
import CarouselBox from "../Components/CarouselBox";

export default class background extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Welcome to myTunes</title>
        {/* Showcase & Nav */}
        <div id="showcase">
          <div className="section-main container">
            <h1>WanderLance.</h1>
            <h2>
              Take my horse on the old town road i gona ride till i cant no
              more.
            </h2>
            <p className="lead hide-on-small red">
              enjoy this cite developed by steve mask with brand new sellers all
              over the bridge
            </p>
          </div>
        </div>
        {/* Music Section */}
        <section id="music" className="section">
          <div class="container col">
            <h2 className="section-head text-center">
              <i className="fas fa-music" /> Sellers
            </h2>
            <h3 className="text-center">
              45 million sellers with us now. Zero ads.
            </h3>
            <p className="lead">окей</p>
            <div class="container row col">
              <div class="cellphone-container">
                <div class="movie">
                  <div class="menu">
                    <i class="material-icons "></i>
                  </div>
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Web Designer</h1>
                        <ul class="movie-gen">
                          <li>Yurii Girnuk</li>
                          <figure class="profile profile-inline">
                            <img
                              src="https://picsum.photos/200/150/?random"
                              class="profile-avatar"
                              alt=""
                            />
                          </figure>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
                          <li>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#10032;</i>
                          </li>
                          <li>4</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">5 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid action-row">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                          100
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                        <div className="smallPos">
                          <hr className="red" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cellphone-container">
                <div class="movie">
                  <div class="menu">
                    <i class="material-icons"></i>
                  </div>
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/2217365/pexels-photo-2217365.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Photographer</h1>
                        <ul class="movie-gen">
                          <li>Bodya Gornostai</li>
                          <figure class="profile profile-inline">
                            <img
                              src="https://picsum.photos/200/150/?random"
                              class="profile-avatar"
                              alt=""
                            />
                          </figure>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
                          <li>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#10032;</i>
                          </li>
                          <li>4</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">115 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid action-row">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                          25
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                        <div className="smallPos">
                          <hr className="red" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cellphone-container">
                <div class="movie">
                  <div class="menu">
                    <i class="material-icons"></i>
                  </div>
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Programmer</h1>
                        <ul class="movie-gen">
                          <li>Bodya Levutskiy</li>
                          <figure class="profile profile-inline">
                            <img
                              src="https://picsum.photos/200/150/?random"
                              class="profile-avatar"
                              alt=""
                            />
                          </figure>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
                          <li>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#10032;</i>
                          </li>
                          <li>4</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">42 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid action-row">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                          95
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                        <div className="smallPos">
                          <hr className="red" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="cellphone-container">
                <div class="movie">
                  <div class="menu">
                    <i class="material-icons"></i>
                  </div>
                  <img
                    class="movie-img"
                    src="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  ></img>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h1>Florist</h1>
                        <ul class="movie-gen">
                          <li>Igor Chaikovsiy</li>
                          <figure class="profile profile-inline">
                            <img
                              src="https://picsum.photos/200/150/?random"
                              class="profile-avatar"
                              alt=""
                            />
                          </figure>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>Rating</h5>
                      </div>
                      <div class="col2">
                        <ul class="movie-likes">
                          <li>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#128970;</i>
                            <i class="material-icons">&#10032;</i>
                          </li>
                          <li>4</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                        <p class="movie-description">
                          DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                          STUFFDOING STUFF.{" "}
                        </p>
                      </div>
                    </div>
                    <div class="mr-grid actors-row">
                      <div class="col1">
                        <p class="movie-actors">2 reviews on this product</p>
                      </div>
                    </div>
                    <div class="mr-grid action-row">
                      <div class="">
                        <div class="watch-btn">
                          <h3>
                            <i class="material-icons">&#xE037;</i> PRICE:
                          </h3>
                        </div>
                      </div>
                      <div class="action-btn">
                        <h6>
                          30
                          <i class="material-icons"> &#x24;</i>
                        </h6>
                        <div className="smallPos">
                          <hr className="red" />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-light text-center margin-bottom grey">
            Support us with your money
          </p>
          <img src="img/mockup1.png" alt="" />
        </section>
        {/* Video Section */}
        <section id="video" className="section bg-grey">
          <div className="container row col">
            <h1-1>New categories</h1-1>
            <CarouselBox />
            <CarouselBox />
            <CarouselBox />
          </div>
          <p className="lead red text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            veniam nobis, nisi ut expedita, doloribus reprehenderit explicabo
            non velit repellat alias saepe inventore repellendus?
          </p>
          <div className="cA">
            <button type="submit">Check all hot deals</button>
            <div className="grey">
              <a href="http://localhost:3000/register">
                Want to make some drugs, click here.
              </a>
            </div>
          </div>
        </section>
        {/* Entertainment Section */}
        <section id="entertainment" className="section">
          <div className="container">
            <h3>Here is the forest.</h3>
            <p className="lead grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem veniam nobis, nisi ut expedita, doloribus reprehenderit
              explicabo non velit repellat alias saepe inventore repellendus?
              Molestias suscipit eos tempora? Quae quaerat cumque in veritatis
              impedit dolorum sapiente recusandae minima quo aperiam quam,
              excepturi quasi totam ad quas? Ipsam laudantium soluta delectus!
            </p>
          </div>
        </section>
        {/* Gift Card Section */}
        <section id="gift-cards" className="section bg-grey">
          <div className="container">
            <div className="gift-cards">
              <div>
                <img
                  src="https://images.pexels.com/photos/3530056/pexels-photo-3530056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <div>
                <h2>Brand new discounts </h2>
                <p className="red">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Neque expedita tempore quasi omnis a aut et totam illo fuga
                  accusamus dolorum vero, ut harum consectetur. Minima molestias
                  officiis culpa non sed dicta itaque. Et aliquam illo obcaecati
                  molestias veritatis porro. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Neque expedita tempore quasi
                  omnis a aut et totam illo fuga accusamus dolorum vero, ut
                  harum consectetur. Minima molestias officiis culpa non sed
                  dicta itaque. Et aliquam illo obcaecati molestias veritatis
                  porro. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Neque expedita tempore quasi omnis a aut et totam illo
                  fuga accusamus dolorum vero, ut harum consectetur. Minima
                  molestias officiis culpa non sed dicta itaque. Et aliquam illo
                  obcaecati molestias veritatis porro. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Neque expedita tempore
                  quasi omnis a aut et totam illo fuga accusamus dolorum vero,
                  ut harum consectetur. Minima molestias officiis culpa non sed
                  dicta itaque. Et aliquam illo obcaecati molestias veritatis
                  porro. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Neque expedita tempore quasi omnis a aut et totam illo
                  fuga accusamus dolorum vero, ut harum consectetur. Minima
                  molestias officiis culpa non sed dicta itaque. Et aliquam illo
                  obcaecati molestias veritatis porro. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Neque expedita tempore
                  quasi omnis a aut et totam illo fuga accusamus dolorum vero,
                  ut harum consectetur. Minima molestias officiis culpa non sed
                  dicta itaque. Et aliquam illo obcaecati molestias veritatis
                  porro. Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Neque expedita tempore quasi omnis a aut et totam illo
                  fuga accusamus dolorum vero, ut harum consectetur. Minima
                  molestias officiis culpa non sed dicta itaque. Et aliquam illo
                  obcaecati molestias veritatis porro. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Neque expedita tempore
                  quasi omnis a aut et totam illo fuga accusamus dolorum vero,
                  ut harum consectetur. Minima molestias officiis culpa non sed
                  dicta itaque. Et aliquam illo obcaecati molestias veritatis
                  porro.
                </p>
                <p className="grey">Already have an discount?</p>
                <hr />
                <a href="#" className="text-secondary ">
                  <i className="fas fa-chevron-right red" /> Redeem
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="container grey">
            <div className="footer-cols">
              <ul>
                <li>Shop &amp; Learn</li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Shows</a>
                </li>
                <li>
                  <a href="#">Apps</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
              </ul>
              <ul>
                <li>Orange Store</li>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Today at Orange</a>
                </li>
                <li>
                  <a href="#">Orange Camp</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
              </ul>
              <ul>
                <li>Education &amp; Business</li>
                <li>
                  <a href="#">Orange &amp; Education</a>
                </li>
                <li>
                  <a href="#">Shop For College</a>
                </li>
                <li>
                  <a href="#">Orange &amp; Business</a>
                </li>
                <li>
                  <a href="#">Shop For Business</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
              <ul>
                <li>About Orange</li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Orange Leadership</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Contact Orange</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom text-center">
            Copyright © 2020 WanderLance Team
          </div>
        </footer>
      </div>
    );
  }
}
