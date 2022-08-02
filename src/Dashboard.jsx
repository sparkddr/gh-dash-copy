import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import repositories from "./assets/repository";

import Repository from "./components/Repository";
import { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { RssIcon, XIcon } from "@heroicons/react/outline";
import TriangleGrey from "./assets/icons/Octicons-triangle-down-grey.svg";

const Dashboard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreRepo, setIsMoreRepo] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  return (
    <div className="relative max-h-screen">
      <Navbar />
      <div className=" text-sm md:grid grid-cols-12 mt-4 md:mt-0">
        {/* Repositories sm */}
        <div className="px-4 py-2 md:hidden  ">
          <h2>Repositories</h2>
          <div className="border border-borderSummary bg-white rounded-lg px-3 py-4 mt-2">
            <form className="my-4" action="">
              <label htmlFor="searchRepo"></label>
              <input
                type="text"
                name="searchRepo"
                id="searchRepo"
                placeholder="Find a repository..."
                className="bg-backgroundBlue  w-full placeholder-textGrey text-sm text-white placeholder:text-sm      border-borderSummary h-8 rounded-md"
              />
            </form>
            <div className="pb-4 flex flex-col gap-2">
              {repositories.slice(0, isMoreRepo ? 20 : 8).map((repository) => {
                return (
                  <Repository
                    key={repository.name + repositories.indexOf(repository)}
                    name={repository.name}
                    link={repository.link}
                  />
                );
              })}
            </div>
            {!isMoreRepo && (
              <button
                className="border-t pt-5 pb-5 pl-2 w-full text-textGrey text-left border-borderSummary text-xs hover:text-blue-600"
                onClick={() => {
                  setIsMoreRepo(true);
                }}
              >
                Show more
              </button>
            )}
          </div>
          <div className="pt-4">
            <h2>Recent activity</h2>
            <div className="border border-borderSummary bg-white rounded-lg px-3 py-3 mt-2">
              <p className="text-xs text-textGrey">
                When you take actions across GitHub, we’ll provide links to that
                activity here.
              </p>
            </div>
          </div>
        </div>
        {/* Repositories md */}
        <div className="hidden md:block px-8 py-7 col-span-4 lg:col-span-3 bg-white border-r border-borderSummary min-h-[94vh] max-h-[94vh] overflow-scroll">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-sm">Recent Repositories</h2>
            <div className="flex justify-end items-center">
              <a
                href="https://github.com/new"
                className="flex gap-1 items-center text-white bg-[#2DA44E] px-4 border border-[rgba(27,31,36,0.15)] py-1 rounded-lg"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="text-white"
                >
                  <path
                    fillRule="evenodd"
                    fill="white"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
                New
              </a>
            </div>
          </div>
          <div className="mt-2">
            <form action="">
              <label htmlFor="searchRepo"></label>
              <input
                type="text"
                name="searchRepo"
                id="searchRepo"
                placeholder="Find a repository..."
                className="bg-backgroundBlue  w-full placeholder-textGrey text-sm text-white placeholder:text-sm      border-borderSummary h-8 rounded-md"
                onFocus={() => {
                  setIsMoreRepo(true);
                }}
              />
            </form>
          </div>
          <div className=" py-4 mt-2">
            <div className="pb-4 flex flex-col gap-2">
              {repositories
                .slice(0, isMoreRepo ? repositories.length : 8)
                .map((repository) => {
                  return (
                    <Repository
                      key={repository.name + repositories.indexOf(repository)}
                      name={repository.name}
                      link={repository.link}
                    />
                  );
                })}
            </div>
            {!isMoreRepo && (
              <button
                className="border-b pt-1 pb-5  w-full text-textGrey text-left border-borderSummary text-xs hover:text-blue-600"
                onClick={() => {
                  setIsMoreRepo(true);
                }}
              >
                Show more
              </button>
            )}
          </div>
          <div className="pt-1">
            <h2 className="font-semibold text-sm">Recent activity</h2>
            <div className=" py-1 mt-2">
              <p className="text-xs text-textGrey">
                When you take actions across GitHub, we’ll provide links to that
                activity here.
              </p>
            </div>
          </div>
        </div>
        {/* Following For YOU */}
        <div className=" text-sm col-span-8 lg:col-span-9 lg:grid grid-cols-12 h-min">
          <div className="px-4 pt-5 md:border-b border-borderSummary col-span-8 ">
            <div className="flex gap-2  border-b border-borderSummary mb-4 ">
              <div
                className={
                  "px-4 py-2 cursor-pointer h-10 " +
                  (!isFollowing && "box-border border-b-2 border-orange-600")
                }
                onClick={() => {
                  setIsFollowing(false);
                }}
              >
                <button className={!isFollowing && "font-bold"}>
                  Following
                </button>
              </div>
              <div
                className={
                  "px-4 py-2 cursor-pointer h-10 " +
                  (isFollowing && "box-border border-b-2 border-orange-600")
                }
                onClick={() => {
                  setIsFollowing(true);
                }}
              >
                <button className="flex flex-nowrap">
                  <span
                    className={
                      "whitespace-nowrap " + (isFollowing && "font-bold")
                    }
                  >
                    {" "}
                    For you{" "}
                  </span>

                  <span className="text-green-700 text-xs border border-green-700 rounded-xl pt-[2px] pb-[1px] px-[3px] ml-1 ">
                    Beta
                  </span>
                </button>
              </div>
              {isFollowing && (
                <div className="ml-auto flex">
                  <button className=" text-blue-600 hover:underline">
                    Send feedback
                  </button>
                  <div className=" flex items-center relative">
                    <div
                      className="flex items-center px-4 gap-2 cursor-pointer "
                      onClick={() => {
                        setIsModalOpen(!isModalOpen);
                      }}
                    >
                      <button className="">Filter</button>
                      <img
                        src={TriangleGrey}
                        alt="icon triangle"
                        className="h-3"
                      />
                    </div>
                    <Transition
                      show={isModalOpen}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100 "
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      as={Fragment}
                    >
                      <Dialog
                        onClose={() => {
                          setIsModalOpen(false);
                        }}
                      >
                        <div className="fixed inset-0 bg-black/30 z-10 lg:hidden "></div>
                        <Dialog.Panel className="w-full lg:w-72 fixed lg:absolute top-20 px-6 z-30  lg:top-32 lg:right-64  ">
                          <div className="rounded-lg bg-white z-30 lg:border lg:border-borderSummary lg:drop-shadow-md">
                            <div className=" flex justify-between items-center px-6 lg:px-4 py-4 sm:py-2 sm:text-sm  border-b border-borderSummary">
                              <h3 className="font-semibold">
                                Filter your feed
                              </h3>
                              <XIcon
                                className="h-4 cursor-pointer"
                                onClick={() => {
                                  setIsModalOpen(false);
                                }}
                              />
                            </div>
                            <form
                              action=""
                              className=" lg:p-0 flex flex-col  sm:text-xs"
                            >
                              <div className="flex items-center px-4 py-2  hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  defaultChecked="true"
                                  name="Announcements"
                                  id="Announcements"
                                  className="h-4 w-4 focus:outline-none focus:ring-0"
                                />
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-comment-discussion feed-filter-item-icon color-fg-muted mx-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
                                  ></path>
                                </svg>
                                <label htmlFor="Announcements">
                                  Announcements
                                </label>
                              </div>
                              <div className="flex items-center px-4 py-2  hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  defaultChecked="true"
                                  name="Releases"
                                  className="h-4 w-4 focus:outline-none focus:ring-0"
                                />
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-tag feed-filter-item-icon color-fg-muted mx-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"
                                  ></path>
                                </svg>
                                <label htmlFor="Releases">Releases</label>
                              </div>
                              <div className="flex items-center px-4 py-2  hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  defaultChecked="true"
                                  name="Sponsors"
                                  className="h-4 w-4 focus:outline-none focus:ring-0"
                                />
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-heart feed-filter-item-icon color-fg-muted mx-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
                                  ></path>
                                </svg>
                                <label htmlFor="Sponsors">Sponsors</label>
                              </div>
                              <div className="flex items-center px-4 py-2  hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  defaultChecked="true"
                                  name="Stars"
                                  className="h-4 w-4 focus:outline-none focus:ring-0"
                                />
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-star feed-filter-item-icon color-fg-muted mx-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                  ></path>
                                </svg>
                                <label htmlFor="Stars">Stars</label>
                              </div>
                              <div className="flex items-center px-4 py-2  hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  defaultChecked="true"
                                  name="Repositories"
                                  className="h-4 w-4 focus:outline-none focus:ring-0"
                                />
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-repo feed-filter-item-icon color-fg-muted mx-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                  ></path>
                                </svg>

                                <label htmlFor="Repositories">
                                  Repositories
                                </label>
                              </div>
                              <div className="flex items-center px-4 py-2  hover:bg-gray-100">
                                <input
                                  type="checkbox"
                                  defaultChecked="true"
                                  name="Follows"
                                  className="h-4 w-4 focus:outline-none focus:ring-0"
                                />
                                <svg
                                  aria-hidden="true"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  version="1.1"
                                  width="16"
                                  data-view-component="true"
                                  class="octicon octicon-person-add feed-filter-item-icon color-fg-muted mx-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M13.25 0a.75.75 0 01.75.75V2h1.25a.75.75 0 010 1.5H14v1.25a.75.75 0 01-1.5 0V3.5h-1.25a.75.75 0 010-1.5h1.25V.75a.75.75 0 01.75-.75zM5.5 4a2 2 0 100 4 2 2 0 000-4zm2.4 4.548a3.5 3.5 0 10-4.799 0 5.527 5.527 0 00-3.1 4.66.75.75 0 101.498.085A4.01 4.01 0 015.5 9.5a4.01 4.01 0 014.001 3.793.75.75 0 101.498-.086 5.527 5.527 0 00-3.1-4.659z"
                                  ></path>
                                </svg>
                                <label htmlFor="Follows">Follows</label>
                              </div>
                              <input
                                type="submit"
                                value="Apply Changes"
                                className="bg-green-600 hover:bg-green-700 rounded-lg  py-2 text-white cursor-pointer m-4 "
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsModalOpen(false);
                                }}
                              />
                            </form>
                          </div>
                        </Dialog.Panel>
                      </Dialog>
                    </Transition>
                  </div>
                </div>
              )}
            </div>
            {isFollowing ? (
              <div>
                {isWelcomeOpen && (
                  <div className="border border-borderSummary bg-white rounded-lg px-5 py-4 mt-5 drop-shadow-sm relative">
                    <XIcon
                      className="absolute top-2 right-4 h-5 cursor-pointer"
                      onClick={() => {
                        setIsWelcomeOpen(false);
                      }}
                    />
                    <h3 className="font-semibold">Welcome to the news feed</h3>
                    <p className="mt-3">
                      We’re updating the cards and ranking all the time, so
                      check back regularly. At first, you might need to follow
                      some people or star some repositories to get started 🌱.
                    </p>
                    <button className="mt-3">
                      <a
                        href="https://github.com/orgs/github-community/discussions/categories/feed"
                        className="text-blue-600 hover:underline"
                      >
                        Send feedback
                      </a>
                    </button>
                  </div>
                )}

                <div className="border border-borderSummary bg-white rounded-lg px-8 py-9 mt-6 text-center">
                  <h3 className="text-xl  font-bold">Explore GitHub</h3>
                  <p className="mt-2 text-textGrey">
                    Star repositories and follow contributors to receive
                    personalized suggestions.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="border border-borderSummary bg-white rounded-lg px-8 py-8 mt-2">
                  <h3 className="text-2xl font-semibold">
                    Discover interesting projects and people to populate your
                    personal news feed.
                  </h3>
                  <p className="mt-4 text-base">
                    Your news feed helps you keep up with recent activity on
                    repositories you{" "}
                    <a
                      href="https://github.com/trending"
                      className="text-blue-600 hover:underline"
                    >
                      watch
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://github.com/sparkddr?tab=stars"
                      className="text-blue-600 hover:underline"
                    >
                      star
                    </a>{" "}
                    and people you{" "}
                    <a
                      href="https://github.com/trending/developers"
                      className="text-blue-600 hover:underline"
                    >
                      follow
                    </a>
                    .
                  </p>
                  <button className="text-blue-600 font-semibold bg-backgroundBlue border rounded-lg border-borderSummary mt-4 px-4 py-1 hover:bg-blue-600 hover:text-white group">
                    <a
                      href="https://github.com/explore"
                      className="text-blue-600 group-hover:text-white"
                    >
                      Explore Github
                    </a>
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-xs pt-8 text-textGrey">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="fill-textGrey"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
                      ></path>
                    </svg>
                    <p className="ml-1">
                      <span className="font-semibold">Protip!</span> The feed
                      shows you events from people you{" "}
                      <a
                        href="https://github.com/sparkddr?tab=following"
                        className="text-blue-600 hover:underline"
                      >
                        follow
                      </a>{" "}
                      and repositories you{" "}
                      <a
                        href="https://github.com/watching"
                        className="text-blue-600 hover:underline"
                      >
                        watch
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://github.com/sparkddr?tab=stars"
                        className="text-blue-600 hover:underline"
                      >
                        star
                      </a>
                      .
                    </p>
                  </div>
                  <a
                    href="https://github.com/sparkddr.private.atom?token=AVNN2YZ4FRYCW4DPKRKMFR6A6TS7O"
                    className="flex items-center group"
                  >
                    <RssIcon className="h-4" />
                    <p className="ml-1 group-hover:text-blue-600 group-hover:underline">
                      Suscribe to your news feed
                    </p>
                  </a>
                </div>
              </div>
            )}
            <Footer />
          </div>
          {/* Latest Changes */}
          <aside className="hidden lg:block col-span-4 px-6 pt-8 md:border-b border-borderSummary">
            <h2 className="font-bold">Latest changes</h2>
            <div className=" pt-4">
              <div className="border-l border-borderSummary pl-8 pb-4 relative">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="absolute -left-2 -top-1"
                >
                  <path
                    fillRule="evenodd"
                    fill="#d0d7de"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                  ></path>
                </svg>
                <h3 className="text-textGrey text-xs ">2 days ago</h3>
                <a
                  href="https://github.blog/changelog/2022-07-29-audit-log-streaming-to-datadog-available-as-private-beta"
                  className="text-sm mt-1 h-10 line-clamp-2 text-ellipsis hover:underline hover:text-blue-600 "
                >
                  Audit Log Streaming to Datadog available as Private Beta
                </a>
              </div>
              <div className="border-l border-borderSummary pl-8 pb-4 relative">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="absolute -left-2 -top-1"
                >
                  <path
                    fillRule="evenodd"
                    fill="#d0d7de"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                  ></path>
                </svg>
                <h3 className="text-textGrey text-xs ">3 days ago</h3>
                <a
                  href="https://github.blog/changelog/2022-07-29-audit-log-streaming-to-datadog-available-as-private-beta"
                  className="text-sm mt-1 h-10 line-clamp-2 text-ellipsis hover:underline hover:text-blue-600 "
                >
                  GitHub CLI extension to manage Actions cache
                </a>
              </div>
              <div className="border-l border-borderSummary pl-8 pb-4 relative">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="absolute -left-2 -top-1"
                >
                  <path
                    fillRule="evenodd"
                    fill="#d0d7de"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                  ></path>
                </svg>
                <h3 className="text-textGrey text-xs ">3 days ago</h3>
                <a
                  href="https://github.blog/changelog/2022-07-29-audit-log-streaming-to-datadog-available-as-private-beta"
                  className="text-sm mt-1 h-10 line-clamp-2 text-ellipsis hover:underline hover:text-blue-600 "
                >
                  The GitHub Enterprise Server 3.6 Release Candidate is
                  available
                </a>
              </div>
              <div className="border-l border-borderSummary pl-8 pb-4 relative">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="absolute -left-2 -top-1"
                >
                  <path
                    fillRule="evenodd"
                    fill="#d0d7de"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                  ></path>
                </svg>
                <h3 className="text-textGrey text-xs ">4 days ago</h3>
                <a
                  href="https://github.blog/changelog/2022-07-29-audit-log-streaming-to-datadog-available-as-private-beta"
                  className="text-sm mt-1 h-10 line-clamp-2 text-ellipsis hover:underline hover:text-blue-600 "
                >
                  Dependabot alerts: timeline of events on the alert details
                  page
                </a>
              </div>
              <div className="border-l border-borderSummary pl-8 text-textGrey text-xs hover:text-blue-600 hover:underline relative">
                <a href="https://github.blog/changelog">View changelog →</a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* MODAL */}
    </div>
  );
};

export default Dashboard;
