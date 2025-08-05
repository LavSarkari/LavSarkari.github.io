'use client'

import { useEffect } from 'react'

export default function ConsoleMessage() {
  useEffect(() => {
    console.log('%cSTOP!', 'color: red; font-size: 40px; font-weight: bold; text-shadow: 2px 2px 0 black;');
    console.log('%cThis zone is meant for devs only. Curious mind detected... 😏', 'color: white; font-size: 16px;');
    console.log('%cWelcome to the backend of LavSarkari.me 💻', 'color: cyan; font-size: 20px;');
    console.log('%c🔗 GitHub: https://github.com/LavSarkari', 'color: lightgreen; font-size: 14px;');
    console.log('%cFlag{Lovee_fromm_Lavvv}', 'color: #ff66cc; font-size: 12px; font-style: italic;');
    console.log('%c(っ◔◡◔)っ ♥ You\'re not supposed to see this... or are you?', 'color: orange; font-size: 13px;');
  }, []);

  return null;
}
