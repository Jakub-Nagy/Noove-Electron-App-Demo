import React, { Fragment, useState } from "react";
import { atom, useRecoilState } from "recoil";
import skills from '../utility/Skills.json';
import * as icons from "@primer/octicons-react";
import Fuse from "fuse.js";

const selectedTags = atom({
  key: "selectedTags",
  default: Array<String>()
});

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
    <>
      <div className="selected">
        {skills.map((element) => { 
          const Icon = icons[element.icon];
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
    </>
  );
};

const DropdownSkills = (props: { categoryName: any; list: any }) => {
  let i = 0;

  props.list.forEach((element: any) => {
    if (
      element.category === props.categoryName ||
      element.item?.category === props.categoryName
    ) {
      i = i + 1;
    }
  });
  if (i !== 0) {
    return (
      <h3 className="section-title">
        {props.categoryName.charAt(0).toUpperCase() +
          props.categoryName.slice(1)}
      </h3>
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
    "business"
  ];

  return (
    <div className="dropdown">
      {categories.map((categoryName, index) => {
        return (
          <Fragment key={index}>
            <DropdownSkills categoryName={categoryName} list={props.list} />
            <div className="skill-group">
              {props.list.map((element: any) => {
                if (
                  element.category === categoryName ||
                  element.item?.category === categoryName
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
      })}
    </div>
  );
};

const SkillPicker = () => {
  const [showDropdown, setshowDropdown] = useState(false);
  const [search, setSearch] = useState("");

  const [tags] = useRecoilState(selectedTags);

  const options = {
    keys: ["label"],
    threshold: 0.3
  };

  const fuse = new Fuse(skills, options);

  return (
    <Fragment>
      <div className="input-group stretch">
        <div className="skill-picker">
          {tags.length === 0 ? null : <SkillSelected />}
          <div className="input-search">
            <icons.SearchIcon size={20} />
            <input
              type="search"
              placeholder="Search for skills"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={function () {
                setshowDropdown(true);
              }}
            />
          </div>

          {showDropdown ? <span className="divider"></span> : <></>}
          {showDropdown ? (
            <Dropdown list={search === "" ? skills : fuse.search(search)} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SkillPicker;