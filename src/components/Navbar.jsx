import {
  MenuIcon,
  BellIcon,
  LogoutIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useState, useRef, Fragment } from "react";
import CaretDown from "../assets/icons/Octicons-triangle-down.svg";
import CaretDownGrey from "../assets/icons/Octicons-triangle-down-grey.svg";

import { Transition, Dialog } from "@headlessui/react";
import Picker from "emoji-picker-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("Never");
  const [status, setStatus] = useState("");
  const [busyCheck, setBusyCheck] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [searchEmoji, setSearchEmoji] = useState(false);

  const inputStatusRef = useRef(null);

  function closeSummary() {
    const details = document.querySelector("#status-details");
    details.toggleAttribute("open");
  }

  return (
    <header className="text-white p-4 bg-darkgrey z-30 h-[62px] relative ">
      <nav className="flex  items-center justify-between">
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="md:hidden"
        >
          <MenuIcon className="h-8 cursor-pointer hover:text-mediumGrey" />
        </div>
        <div className="flex gap-3 items-center">
          <a href="/">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              className="fill-white h-8"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <form
            className="hidden md:block relative group focus:last:hidden "
            action=""
            method="post"
          >
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search or jump to..."
              className="bg-darkgrey w-60 focus:w-[38vw] transition-all duration-300 placeholder-mediumGrey text-sm text-white placeholder:text-sm  focus:outline-none focus:ring-0 focus:border-borderGrey  focus:bg-white focus:text-darkgrey  border-borderGrey h-7 rounded-md"
              autoComplete="off"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              aria-hidden="true"
              className="absolute right-1 top-1 group-focus:hidden"
            >
              <path
                fill="none"
                stroke="#979A9C"
                opacity=".4"
                d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
              ></path>
              <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
            </svg>
          </form>
          <ul className=" hidden md:flex gap-4 text-sm font-bold">
            <li className="hover:text-mediumGrey">
              <a href="https://github.com/pulls">Pulls</a>
            </li>
            <li className="hover:text-mediumGrey">
              <a href="https://github.com/issues">Issues</a>
            </li>
            <li className="hover:text-mediumGrey">
              <a href="https://github.com/marketplace">Marketplace</a>
            </li>
            <li className="hover:text-mediumGrey">
              <a href="https://github.com/explore">Explore</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/notifications">
            <BellIcon className="h-5 hover:text-mediumGrey" />
          </a>
          <div className="h-5 hover:text-mediumGrey hidden md:block  relative cursor-pointer">
            <div
              className="flex gap-1 items-center"
              onClick={() => {
                setIsNewOpen(!isNewOpen);
                setIsSummaryOpen(false);
              }}
            >
              <PlusIcon className="h-5" />
              <img src={CaretDown} alt="caret" className="h-3" />
            </div>

            {isNewOpen && (
              <div className="absolute top-8 right-0 flex flex-col gap-2 bg-white text-darkgrey drop-shadow-lg rounded-lg border border-borderSummary z-20">
                <img
                  src={CaretDown}
                  alt="carte"
                  className="absolute h-6 -top-[15px] rotate-180 right-3"
                />
                <ul className="w-max py-1 text-sm">
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/new">New Repository</a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/new/import">
                      Import Repository
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://gist.github.com/">New gist</a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/organizations/new">
                      New organization
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/organizations/new">
                      New project
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="h-5 hidden md:block relative ">
            <div
              className="flex gap-1 items-center  cursor-pointer"
              onClick={() => {
                setIsSummaryOpen(!isSummaryOpen);
                setIsNewOpen(false);
              }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/89840995?s=40&v=4"
                className="h-5 object-fill rounded-xl"
                alt="avatar"
              />
              <img src={CaretDown} alt="caret" className="h-3" />
            </div>
            {isSummaryOpen && (
              <div className=" text-sm absolute w-max top-8 right-0 flex flex-col gap-2 bg-white text-darkgrey drop-shadow-lg rounded-lg border border-borderSummary z-20 ">
                <img
                  src={CaretDown}
                  alt="carte"
                  className="absolute h-6 -top-[15px] rotate-180 right-3"
                />
                <p className="border-t px-5 py-2 border-borderGrey ">
                  Sign in as{" "}
                  <a href="https://github.com/sparkddr" className="font-bold">
                    sparkddr
                  </a>
                </p>
                <div className="text-sm px-4 w-full text-textGrey group ">
                  <button
                    className="w-full border border-borderSummary flex gap-2 px-3 items-center py-1 group-hover:text-blue-600"
                    onClick={() => {
                      setIsStatusOpen(true);
                    }}
                  >
                    <svg
                      class="octicon octicon-smiley"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                      className="fill-textGrey group-hover:fill-blue-600 "
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                      ></path>
                    </svg>
                    Set status
                  </button>
                </div>
                <ul className="py-1 flex flex-col text-sm  w-full border-t  border-borderSummary ">
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/sparkddr">Your Profile</a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/sparkddr?tab=repositories">
                      Your Repositories
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/codespaces">Your codespaces</a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/sparkddr?tab=projects&type=new">
                      Your projects
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/sparkddr?tab=stars">
                      Your stars
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://gist.github.com/mine">Your gists</a>
                  </li>
                </ul>
                <ul className=" py-1 flex flex-col text-sm w-full border-t  border-borderSummary">
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/account/choose?action=upgrade">
                      Upgrade
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/account/choose?action=upgrade">
                      Feature preview
                    </a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://docs.github.com/">Help</a>
                  </li>
                  <li className="px-6 py-1 hover:bg-blue-600 hover:text-white ">
                    <a href="https://github.com/settings/profile">Settings</a>
                  </li>
                </ul>
                <button className="px-5 py-2  hover:bg-blue-600 hover:text-white w-full text-sm text-left border-t  border-borderSummary ">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-darkgrey font-semibold md:hidden">
          <form className=" md:hidden" action="" method="post">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search or jump to..."
              className=" mt-4 bg-darkgrey w-full placeholder-mediumGrey text-sm text-white placeholder:text-sm  focus:outline-none focus:ring-0 focus:border-borderGrey  focus:bg-slate-600 border-borderGrey h-7 rounded-md"
            />
          </form>
          <ul
            className="
        flex flex-col text-sm mt-4 "
          >
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/dashboard">Dashboard</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/pulls">Pull Requests</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/issues">Issues</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/marketplace">Marketplace</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/explore">Explore</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/codespaces">Codespaces</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/sponsors">Sponsors</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a href="https://github.com/settings/profile">Settings</a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <a
                href="https://github.com/sparkddr"
                className="flex gap-1 items-center "
              >
                <img
                  src="https://avatars.githubusercontent.com/u/89840995?s=40&v=4"
                  alt="avatar"
                  className="h-5 rounded-xl"
                />
                sparkddr
              </a>
            </li>
            <li className="border-t py-2 border-borderGrey ">
              <button className="flex gap-1 items-center  ">
                <LogoutIcon className="h-5" />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}{" "}
      <Transition
        show={isStatusOpen}
        enter="ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}
      >
        <Dialog
          onClose={() => {
            setIsStatusOpen(false);
          }}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/30 z-40  "
            aria-hidden="true"
          />
          <Dialog.Panel className="fixed top-32 left-[25%] z-50 bg-white w-1/2 rounded-xl overflow-hidden">
            <Dialog.Title className="bg-backgroundBlue px-4 py-3 border-b text-sm font-semibold border-borderSummary flex justify-between">
              Edit Status
              <XIcon className="h-4" onClick={() => setIsStatusOpen(false)} />
            </Dialog.Title>
            <form action="">
              <div className="py-2 px-4 border-b border-borderSummary ">
                <div className="flex relative">
                  <div
                    className=" px-3 bg-backgroundBlue  text-darkgrey border border-r-0 rounded-l-md  border-borderSummary h-8 hover:bg-blue-600 cursor-pointer flex justify-center items-center group"
                    onClick={() => {
                      setSearchEmoji(!searchEmoji);
                    }}
                  >
                    {chosenEmoji ? (
                      <span>{chosenEmoji}</span>
                    ) : (
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="fill-textGrey group-hover:fill-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                        ></path>
                      </svg>
                    )}
                  </div>
                  <label htmlFor="status"></label>
                  <input
                    type="text"
                    name="status"
                    id="status"
                    ref={inputStatusRef}
                    onChange={() => {
                      setStatus(inputStatusRef.current.value);
                    }}
                    placeholder="What's happening?"
                    className="bg-backgroundBlue  w-full placeholder-textGrey text-sm placeholder:text-sm  text-darkgrey    border-borderSummary h-8 "
                    autoComplete="off"
                  />
                </div>
                {searchEmoji && (
                  <div className="fixed z-30">
                    <Picker
                      onEmojiClick={(event, emojiObject) => {
                        const emoj = emojiObject.emoji;
                        setChosenEmoji(emoj);
                        setSearchEmoji(false);
                      }}
                    />
                  </div>
                )}
                {status === "" && (
                  <div className="text-textGrey">
                    <h3 className="text-sm mt-4">Suggestions</h3>
                    <ul className="text-sm grid grid-cols-2 mt-4">
                      <div className="px-4">
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={() => {
                            inputStatusRef.current.value = "On vacation";
                            setStatus(inputStatusRef.current.value);
                            setChosenEmoji("🌴");
                          }}
                        >
                          🌴<li>On vacation</li>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={() => {
                            inputStatusRef.current.value = "Out Sick";
                            setChosenEmoji("🤒");
                            setStatus(inputStatusRef.current.value);
                          }}
                        >
                          🤒<li>Out sick</li>
                        </div>
                      </div>

                      <div className="px-4">
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={() => {
                            inputStatusRef.current.value = "Working from home";
                            setChosenEmoji("🏠");
                            setStatus(inputStatusRef.current.value);
                          }}
                        >
                          🏠<li>Working from home</li>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer"
                          onClick={() => {
                            inputStatusRef.current.value = "Focusing";
                            setChosenEmoji("🎯");
                            setStatus(inputStatusRef.current.value);
                          }}
                        >
                          🎯<li>Focusing</li>
                        </div>
                      </div>
                    </ul>
                  </div>
                )}

                <div className="flex gap-2 mt-4 text-xs ">
                  <input
                    type="checkbox"
                    className="mt-1 focus:ring-0 h-[13px] w-[13px] rounded-sm"
                    onChange={() => {
                      if (!busyCheck) {
                        inputStatusRef.current.value =
                          "I may be slow to respond.";
                        setStatus(inputStatusRef.current.value);
                      }
                      setBusyCheck(!busyCheck);
                    }}
                  />
                  <div className="pb-2 ">
                    <h3 className="font-bold text-sm">Busy</h3>
                    <p className="text-textGrey mt-2">
                      When others mention you, assign you, or request your
                      review, GitHub will let them know that you have limited
                      availability.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <details className="relative w-max" id="status-details">
                  <summary className="flex gap-3 items-center p-4 cursor-pointer ">
                    <div>Clear status</div>
                    <div className="px-4 py-1 bg-backgroundBlue border border-borderSummary rounded-lg flex items-center gap-3 justify-center text-xs ">
                      <span className="font-semibold">{selectedStatus}</span>
                      <img src={CaretDownGrey} alt="Caret" className="h-3" />
                    </div>
                  </summary>
                  <ul
                    className="bg-white border border-borderSummary rounded-lg w-52 text-xs max-h-48 overflow-scroll fixed translate-x-28 -translate-y-4 z-30  "
                    onClick={() => {
                      closeSummary();
                    }}
                  >
                    <li
                      className="p-3 hover:bg-blue-600 hover:text-white cursor-pointer border-b border-borderSummary"
                      onClick={() => {
                        setSelectedStatus("Never");
                      }}
                    >
                      <h3 className="font-bold mb-1">Never</h3> Keep this status
                      until you clear your status or edit your status
                    </li>
                    <li
                      className="px-3 py-1 mt-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                      onClick={() => {
                        setSelectedStatus("in 30 minutes");
                      }}
                    >
                      in 30 minutes
                    </li>
                    <li
                      className="px-3 py-1  hover:bg-blue-600 hover:text-white cursor-pointer"
                      onClick={() => {
                        setSelectedStatus("in 1 hour");
                      }}
                    >
                      in 1 hour
                    </li>
                    <li
                      className="px-3 py-1 hover:bg-blue-600 hover:text-white cursor-pointer"
                      onClick={() => {
                        setSelectedStatus("in 4 hour");
                      }}
                    >
                      in 4 hour
                    </li>
                    <li
                      className="px-3 py-1 hover:bg-blue-600 hover:text-white cursor-pointer"
                      onClick={() => {
                        setSelectedStatus("today");
                      }}
                    >
                      today
                    </li>
                    <li
                      className="px-3 py-1 mb-2 hover:bg-blue-600 hover:text-white cursor-pointer"
                      onClick={() => {
                        setSelectedStatus("this week");
                      }}
                    >
                      this week
                    </li>
                  </ul>
                  <div></div>
                </details>
              </div>
              <div className="p-4 border-t border-borderSummary flex gap-4 text-sm font-semibold">
                <button
                  className="w-full block relative py-2 bg-green-600 hover:bg-green-700 border border-borderSummary rounded-lg text-white before:content-[''] disabled:before:bg-[rgba(255,255,255,0.4)] disabled:before:w-full disabled:before:absolute disabled:before:left-0 disabled:before:h-full disabled:before:top-0 "
                  disabled={!status}
                >
                  Set status
                </button>
                <button
                  className="w-full py-2 relative bg-backgroundBlue hover:bg-slate-100 border border-borderSummary rounded-lg before:content-[''] disabled:before:bg-[rgba(255,255,255,0.4)] disabled:before:w-full disabled:before:absolute disabled:before:left-0 disabled:before:h-full disabled:before:top-0  "
                  disabled={!status}
                >
                  Clear status
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;
