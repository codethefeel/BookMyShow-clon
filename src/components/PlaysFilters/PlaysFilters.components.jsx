import React from "react";
import { Disclosure } from "@headlessui/react";

import { BiChevronUp, BiChevronDown } from "react-icons/bi";

export default function PlaysFilters(props) {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2 flex items-center gap-2 mb-2">
              { open ? <BiChevronUp/> : <BiChevronDown/> } 
              <span className={open? "text-red-400" : "text-black"}>
              {props.title}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <div className="flex flex-wrap gap-3 items-center">
              {
                props.tags.map((tag) =>(
                    <>
                    <div className="px-3 py-2 border-gray-200 border-2">
                    <span className="text-red-400">
                {tag}
              </span>
              </div>
                    </>
                ))
              }
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
