/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import "./text.css";
import "./background.css";

export default class Home extends Component {
  render() {
    return (
      <div class="container col">
        <CarouselBox />
        <div class="row">
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
                      <div class="stars">
                        <form action="">
                          {" "}
                          <input
                            class="star star-5"
                            id="star-5"
                            type="radio"
                            name="star"
                          />{" "}
                          <label class="star star-5" for="star-5">
                            {" "}
                          </label>{" "}
                          <input
                            class="star star-4"
                            id="star-4"
                            type="radio"
                            name="star"
                          />{" "}
                          <label class="star star-4" for="star-4"></label>{" "}
                          <input
                            class="star star-3"
                            id="star-3"
                            type="radio"
                            name="star"
                          />{" "}
                          <label class="star star-3" for="star-3"></label>{" "}
                          <input
                            class="star star-2"
                            id="star-2"
                            type="radio"
                            name="star"
                          />{" "}
                          <label class="star star-2" for="star-2"></label>{" "}
                          <input
                            class="star star-1"
                            id="star-1"
                            type="radio"
                            name="star"
                          />{" "}
                          <label class="star star-1" for="star-1"></label>{" "}
                        </form>
                      </div>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">
                      DOING STUFFDOING STUFFDOING STUFFDOING STUFF DOING
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING STUFFDOING
                      STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">125 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid action-row">
                  <div class="col2">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="col7 action-btn">
                    <h6>
                      2100
                      <i class="material-icons"> &#x24;</i>
                    </h6>
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
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING STUFFDOING
                      STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">115 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid action-row">
                  <div class="col2">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="col7 action-btn">
                    <h6>
                      2599
                      <i class="material-icons"> &#x24;</i>
                    </h6>
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
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING STUFFDOING
                      STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">152 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid action-row">
                  <div class="col2">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="col7 action-btn">
                    <h6>
                      520
                      <i class="material-icons"> &#x24;</i>
                    </h6>
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
                      STUFFDOING STUFFDOING STUFFDOING STUFF DOING STUFFDOING
                      STUFF.{" "}
                    </p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">11 reviews on this product</p>
                  </div>
                </div>
                <div class="mr-grid action-row">
                  <div class="col2">
                    <div class="watch-btn">
                      <h3>
                        <i class="material-icons">&#xE037;</i> PRICE:
                      </h3>
                    </div>
                  </div>
                  <div class="col7 action-btn">
                    <h6>
                      1970
                      <i class="material-icons"> &#x24;</i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
