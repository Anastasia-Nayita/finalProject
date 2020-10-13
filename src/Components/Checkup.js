import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import axios from "../axios";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { animateScroll as scroll } from "react-scroll";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    cards: {
        height: 550,
        textAlign: "center",
        margin: "10%",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    large: {
        textAlign: "center",
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        border: "solid grey 0.5px",
    },
}));

export default function Checkup() {
    //console.log("🦸🏻‍♀️🦹🏻‍♀️🧝‍♀️");
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    const [image, setImage] = useState("");

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickPh = async (e) => {
        e.preventDefault();
        console.log("choice: ", e.currentTarget.value);
        let choice = e.currentTarget.value;

        try {
            const { data } = await axios.post("/physical", { choice });
            console.log("data in try - axios", data);

            setClicked(true);
            //console.log("clicked in try", { clicked });
        } catch (err) {
            console.log("err: ", err);
        }

        if (choice === "great") {
            setImage("../images/Physically_Great.png");
        } else if (choice === "good") {
            setImage("../images/Physically_Good.png");
        } else if (choice === "poor") {
            setImage("../images/Physically_Poor.png");
        } else if (choice === "rough") {
            setImage("../images/Physically_Rough.png");
        } else if (choice === "meh") {
            setImage("../images/Physically_Meh.png");
        }

        scroll.scrollTo(725);
    };

    console.log("clicked  ", clicked);
    const [imageM, setImageM] = useState("");

    const handleClickMn = async (e) => {
        e.preventDefault();
        //console.log("choice: ", e.currentTarget.value);
        let choice = e.currentTarget.value;

        try {
            const { data } = await axios.post("/mentall", { choice });
            console.log("data in try - axios", data);

            setClicked(true);
            //console.log("clicked in try", { clicked });
        } catch (err) {
            console.log("err: ", err);
        }

        if (choice === "great") {
            setImageM("../images/Mentally_Great.png");
        } else if (choice === "good") {
            setImageM("../images/Mentally_Good.png");
        } else if (choice === "poor") {
            setImageM("../images/Mentally_Poor.png");
        } else if (choice === "rough") {
            setImageM("../images/Mentally_Rough.png");
        } else if (choice === "meh") {
            setImageM("../images/Mentally_Meh.png");
        }

        scroll.scrollTo(1500);
    };

    const handleClickEm = async (e) => {
        e.preventDefault();
        console.log("clicked on emotion");
    };

    return (
        <div>
            <div className="checkup-block">
                <Card className={classes.cards}>
                    <h1>Physically</h1>
                    <div className="checkup-btns">
                        <Button
                            variant="contained"
                            style={{ margin: "5% 0" }}
                            color="primary"
                            value="great"
                            onClick={(e) => handleClickPh(e)}
                        >
                            great
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="good"
                            onClick={(e) => handleClickPh(e)}
                        >
                            good
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="meh"
                            onClick={(e) => handleClickPh(e)}
                        >
                            meh
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="poor"
                            onClick={(e) => handleClickPh(e)}
                        >
                            poor
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="rough"
                            onClick={(e) => handleClickPh(e)}
                        >
                            rough
                        </Button>
                    </div>
                    <div>
                        <img
                            className="phy-img"
                            src={image || "../images/Physically_Meh.png"}
                        />
                    </div>
                </Card>

                <Card className={classes.cards}>
                    <h1>Mentally</h1>
                    <div className="checkup-btns">
                        <Button
                            variant="contained"
                            style={{ margin: "5% 0" }}
                            color="primary"
                            value="great"
                            onClick={(e) => handleClickMn(e)}
                        >
                            great
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="good"
                            onClick={(e) => handleClickMn(e)}
                        >
                            good
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="meh"
                            onClick={(e) => handleClickMn(e)}
                        >
                            meh
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="poor"
                            onClick={(e) => handleClickMn(e)}
                        >
                            poor
                        </Button>
                        <Button
                            style={{ margin: "5% 0" }}
                            variant="contained"
                            color="primary"
                            value="rough"
                            onClick={(e) => handleClickMn(e)}
                        >
                            rough
                        </Button>
                    </div>
                    <div>
                        <img
                            className="phy-img"
                            src={imageM || "../images/Mentally_Meh.png"}
                        />
                    </div>
                </Card>

                <Card className={classes.cards}>
                    <h1>Emotionally</h1>
                    <div className="checkup-btns-em">
                        <Avatar
                            variant="square"
                            src="../images/Emotionaly_Great.png"
                            className={classes.large}
                            onClick={handleOpen}
                        />
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.paper}>
                                    <h2 id="transition-modal-title">
                                        Choose 5 descriptive emotions
                                    </h2>
                                    <h4 id="transition-modal-description">
                                        <ul>
                                            <li>Happy</li>
                                            <li>Gratefull</li>
                                        </ul>
                                    </h4>
                                </div>
                            </Fade>
                        </Modal>

                        <Avatar
                            variant="square"
                            src="../images/Emotionaly_Good.png"
                            className={classes.large}
                        />
                        <Avatar
                            variant="square"
                            src="../images/Emotionaly_Meh.png"
                            className={classes.large}
                        />
                        <Avatar
                            variant="square"
                            src="../images/Emotionaly_Poor.png"
                            className={classes.large}
                        />
                        <Avatar
                            variant="square"
                            src="../images/Emotionaly_Rough.png"
                            className={classes.large}
                            onClick={(e) => handleClickEm(e)}
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}
