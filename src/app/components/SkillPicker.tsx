// React dependencies
import React, { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import * as icons from "@primer/octicons-react";

// Skills indexing
import skills from '../utility/Skills.json';
import Fuse from "fuse.js";

// Components
import OutsideClickHandler from "../components/OutsideClickHandler"
import { selectedTags } from "../views/Register";

const Skill = (props: { label: string; id: string }) => {
  const [tags, setTags] = useRecoilState(selectedTags);
  return (
    <div className="skill">
      <input
        id={props.id}
        type="checkbox"
        checked={tags.includes(props.id) ? true : false}
        onChange={() => {
          return tags.includes(props.id)
            ? setTags(
                [...tags].filter(function (value) {
                  return value !== props.id;
                })
              )
            : setTags([...tags, props.id]);
        }}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

const SkillSelected = () => {
  const [tags, setTags] = useRecoilState(selectedTags);

  return (
    <Fragment>
      <div className="selected">
        {skills.map((element: any) => { 
          const Icon = icons[element.icon as keyof typeof icons];
          return tags.includes(element.id) ? (
            <div className="skill" key={element.id}>
              <Icon size={16} />
              <label>{element.label}</label>
              <span
                onClick={function () {
                  setTags(
                    [...tags].filter(function (value) {
                      return value !== element.id;
                    })
                  );
                }}
              >
                <icons.XIcon size={16} className="close" />
              </span>
            </div>
          ) : null;
        })}
      </div>
      <span className="divider"></span>
    </Fragment>
  );
};

const DropdownSections = (props: { categoryName: any; list: any }) => {
  let i = 0;

  props.list.forEach((element: any) => {
    if (
      element.category === props.categoryName ||
      element.item?.category === props.categoryName
    ) {
      i++;
    }
  });
  if (i !== 0) {
    return (
      <Fragment>
        <h3 className="section-title">
          {props.categoryName.charAt(0).toUpperCase() +
            props.categoryName.slice(1)}
        </h3>
        <div className="skill-group">
          {props.list.map((element: any) => {
            if (
              element.category === props.categoryName ||
              element.item?.category === props.categoryName
            ) {
              return (
                <Skill
                  label={element.label ? element.label : element.item.label}
                  id={element.id ? element.id : element.item.id}
                  key={element.id ? element.id : element.item.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </Fragment>
    );
  } else {
    return null;
  }
};

const Dropdown = (props: { list: any }) => {
  const categories = [
    "engineering",
    "science",
    "creative",
    "marketing",
    "business",
  ];

  return (
    <div className="dropdown">
      <div className="divider"></div>
      <div className="skills">
        {categories.map((categoryName, index) => {
          return (
            <Fragment key={index}>
              <DropdownSections categoryName={categoryName} list={props.list} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const SkillPicker = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [tags] = useRecoilState(selectedTags);

  const options = {
    keys: ["label"],
    threshold: 0.3
  };

  const fuse = new Fuse(skills, options);

  return (
    <Fragment>
      <fieldset className="input-group stretch">
        <OutsideClickHandler
          onOutsideClick={() => {
            setDropdownOpen(false);
          }}
        >
          <div 
            className={dropdownOpen ? "skill-picker dropped" : "skill-picker"}
            onClick={() => {
              setDropdownOpen(true);
            }}
          >
            <div className="top-group">
              {tags.length === 0 ? null : <SkillSelected />}
              <div className="input-search">
                <icons.SearchIcon size={20} />
                <input
                  type="search"
                  placeholder="Search for skills"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            {dropdownOpen ? <span className="divider"></span> : <></>}
            {dropdownOpen ? (
              <Dropdown list={search === "" ? skills : fuse.search(search)} />
            ) : ( <></> )}
          </div>
        </OutsideClickHandler>
      </fieldset>
    </Fragment>
  );
};

export default SkillPicker;