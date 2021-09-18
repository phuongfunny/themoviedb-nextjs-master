import {
  faAngleDown,
  faAngleRight,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider } from "@material-ui/core";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { genres, listCertif, sortOption } from "../../../../constant";

function Filter() {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenWhere, setIsOpenWheres] = useState(false);
  const [value, setValue] = useState([0, 5]);

  const toggleSort = () => setIsOpenSort(!isOpenSort);
  const toggleFilters = () => setIsOpenFilters(!isOpenFilters);
  const handleWhereToWatch = () => setIsOpenWheres(!isOpenWhere);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleActive = (e: any) => {
    if (e.target.className === "") {
      e.target.className = "selected";
    } else {
      e.target.className = "";
    }
  };
  return (
    <>
      <div className="filter">
        <div className="filter-sort">
          <div className="title" onClick={toggleSort}>
            <h2>Sort</h2>
            <span>
              <FontAwesomeIcon icon={faAngleRight} size="lg" fixedWidth />
            </span>
          </div>
          <Collapse className="content" isOpen={isOpenSort}>
            <Card>
              <CardBody>
                <h3>Sort Results By</h3>
                <div className="select sort-option">
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    className="list-option"
                  >
                    {sortOption.map((item, keys) => (
                      <option key={keys}>{item}</option>
                    ))}
                  </Input>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleDown} size="sm" fixedWidth />
                  </span>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="filters">
          <div className="title" onClick={toggleFilters}>
            <h2>Filters </h2>
            <span>
              <FontAwesomeIcon icon={faAngleRight} size="lg" fixedWidth />
            </span>
          </div>
          <Collapse className="content" isOpen={isOpenFilters}>
            <Card>
              <CardBody>
                <div className="filter">
                  <h3>
                    Show Me{" "}
                    <span style={{ marginLeft: "5px" }}>
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size="sm"
                        fixedWidth
                      />
                    </span>
                  </h3>
                  <div className="option-filter">
                    <FormGroup className="option">
                      <FormGroup>
                        <Label>
                          <Input type="radio" name="radio1" defaultChecked />{" "}
                          Everything
                        </Label>
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <Input type="radio" name="radio1" defaultChecked />{" "}
                          Movies I Haven't Seen
                        </Label>
                      </FormGroup>
                      <FormGroup>
                        <Label>
                          <Input type="radio" name="radio1" defaultChecked />{" "}
                          Movies I Have Seen
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </div>
                </div>
                <div className="filter">
                  <h3>Availabilities</h3>
                  <div className="all_avail option-filter">
                    <FormGroup>
                      <Label>
                        <Input type="checkbox" defaultChecked /> Search all
                        availabilities?
                      </Label>
                    </FormGroup>
                  </div>
                </div>
                <div className="filter">
                  <h3>Release Dates </h3>
                  <div className="all_avail option-filter">
                    <FormGroup>
                      <Label>
                        <Input type="checkbox" defaultChecked /> Search all
                        releases?
                      </Label>
                    </FormGroup>
                    <FormGroup className="filter-date">
                      <Label for="exampleEmail">From</Label>
                      <Input
                        type="date"
                        name="date_from"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                    <FormGroup className="filter-date">
                      <Label for="exampleEmail">To</Label>
                      <Input
                        type="date"
                        name="date_to"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="filter">
                  <h3>Genres </h3>
                  <div className="all_avail option-filter">
                    <ul className="list-genres">
                      {genres.map((item, index) => (
                        <li key={index} onClick={(e) => handleActive(e)}>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="filter">
                  <h3>Certification </h3>
                  <div className="all_avail option-filter">
                    <ul className="list-genres">
                      {listCertif.map((item, index) => (
                        <li key={index} onClick={(e) => handleActive(e)}>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="filter">
                  <h3>
                    Language{" "}
                    <span style={{ marginLeft: "5px" }}>
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size="sm"
                        fixedWidth
                      />
                    </span>
                  </h3>
                  <div className="select option-lang">
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      className="list-option"
                    >
                      <option>None</option>
                      <option>English</option>
                      <option>Vietnamese</option>
                    </Input>
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        size="sm"
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
                <div className="filter">
                  <h3>User Score</h3>
                  <div className="all_avail option-filter">
                    <Slider
                      className="range-score"
                      value={value}
                      max={10}
                      min={0}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                  </div>
                </div>

                <div className="filter">
                  <h3>Runtime</h3>
                  <div className="all_avail option-filter">
                    <Slider
                      className="range-score"
                      value={[50, 100]}
                      max={400}
                      min={0}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                    />
                  </div>
                </div>
                <div className="filter">
                  <h3>Keywords </h3>
                  <div className="all_avail option-filter">
                    <FormGroup className="filter-date">
                      <Input
                        type="text"
                        name="date_to"
                        id="exampleEmail"
                        style={{ width: "100%" }}
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="filter-sort" style={{ marginTop: "20px" }}>
          <div className="title" onClick={handleWhereToWatch}>
            <h2>Where To Watch</h2>
            <span>
              <FontAwesomeIcon icon={faAngleRight} size="lg" fixedWidth />
            </span>
          </div>
          <Collapse className="content" isOpen={isOpenWhere}>
            <Card>
              <CardBody>
                <h3>Sort Results By</h3>
                <div className="select sort-option">
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    className="list-option"
                  >
                    {sortOption.map((item: string, keys: number) => (
                      <option key={keys}>{item}</option>
                    ))}
                  </Input>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleDown} size="sm" fixedWidth />
                  </span>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="action-search" style={{ marginTop: "20px" }}>
          <Button className="btn-search">Search</Button>
        </div>
      </div>
    </>
  );
}

export default Filter;
