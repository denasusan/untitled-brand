import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, NativeSelect, Radio, RadioGroup, TextField } from "@material-ui/core";
import Head from "next/head"
import Image from "next/image";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [username, setUsername] = useState("");
    const [ordername, setOrdername] = useState("");
    const [nomorTelphone, setNomorTelphone] = useState("");
    const [description, setDescription] = useState("");
    const [imageDesign, setImageDesign] = useState("");
    const [imageDesignFile, setImageDesignFile] = useState("");
    const [imageTulisanBisban, setImageTulisanBisban] = useState("");
    const [imageDesignInner, setImageDesignInner] = useState("");
    const [imageAuthenticLabel, setImageAuthenticLabel] = useState("");
    const [imageBisbanBawah, setImageBisbanBawah] = useState("");
    const [imageCareLabel, setImageCareLabel] = useState("");
    const [fileUkuran, setFileUkuran] = useState();
    const [sumPcs, setSumPcs] = useState("");

    const qualities = [
        {
            "name": "Medium (start from 80K)",
            "value": "medium"
        },
        {
            "name": "Basic (start from 65K)",
            "value": "basic"
        },
        {
            "name": "Premium (start from 100K)",
            "value": "premium"
        }
    ]
    const [chooseQuality, setChooseQuality] = useState("")

    const mediumJerseys = [
        {
            "name": "Futsal",
            "value": "futsal"
        },
        {
            "name": "Basket",
            "value": "basket"
        },
        {
            "name": "Gaming",
            "value": "gaming"
        },
        {
            "name": "Running",
            "value": "running"
        },
        {
            "name": "TNI",
            "value": "tni"
        },
        {
            "name": "Sepeda",
            "value": "sepeda"
        },
        {
            "name": "Lainnya",
            "value": "lainnya"
        },
    ]
    const [chooseJersey, setChooseJersey] = useState(mediumJerseys[0].value);

    const cuttingFutsal = [
        {
            "name": "Baju lengan Pendek",
            "value": "baju-lengan-pendek"
        },
        {
            "name": "Baju lengan panjang",
            "value": "baju-lengan-panjang"
        },
        {
            "name": "Celana",
            "value": "celana"
        },
        {
            "name": "Lekbong",
            "value": "lekbong"
        },
    ]
    const cuttingBasket = [
        {
            "name": "Atasan Basket",
            "value": "atasan-basket"
        },
        {
            "name": "Celana Basket",
            "value": "celana-basket"
        },
        {
            "name": "Baju Lengan Pendek",
            "value": "baju-lengan-pendek"
        },
        {
            "name": "Lainnya",
            "value": "lainnya"
        },
    ]
    const cuttingGaming = [
        {
            "name": "Celana Panjang",
            "value": "celana-panjang"
        },
        {
            "name": "Baju Lengan Pendek",
            "value": "baju-lengan-pendek"
        },
        {
            "name": "Lainnya",
            "value": "lainnya"
        },
    ]
    const cuttingRunning = [
        {
            "name": "Lengan Pendek",
            "value": "lengan-pendek"
        },
        {
            "name": "Lekbong",
            "value": "lekbong"
        },
        {
            "name": "Celana Pendek",
            "value": "celana-pendek"
        },
        {
            "name": "Celana Panjang",
            "value": "celna-panjang"
        },
        {
            "name": "Lainnya",
            "value": "lainnya"
        },
    ]
    const cuttingTNI = [
        {
            "name": "Celana Panjang",
            "value": "celana-panjang"
        },
        {
            "name": "Baju Lengan Pendek",
            "value": "baju-lengan-pendek"
        },
        {
            "name": "Lainnya",
            "value": "lainnya"
        },
    ]
    const cuttingSepeda = [
        {
            "name": "MTB Tangan Panjang",
            "value": "mtb-tangan-panjang"
        },
        {
            "name": "Pola Roadbike tangan pendek",
            "value": "pola-roadbike-tangan-pendek"
        },
        {
            "name": "Roadbike tangan Panjang",
            "value": "roadbike-tangan-panjang"
        },
    ]
    const cuttingLainnya = [
        {
            "name": "Baju lengan pendek",
            "value": "baju-lengan-pendek"
        },
        {
            "name": "Baju lengan panjang",
            "value": "baju-lengan-panjang"
        },
        {
            "name": "Celana lengan pendek",
            "value": "celana-lengan-pendek"
        },
        {
            "name": "Celana lengan panjang",
            "value": "celana-lengan-panjang"
        },
    ]
    const [chooseCutting, setChooseCutting] = useState([]);

    const polas = [
        {
            "name": "Oblong",
            "value": "oblong"
        },
        {
            "name": "Raglan",
            "value": "raglan"
        }
    ]
    const [choosePola, setChoosePola] = useState(polas[0].value);

    const isDesignReady = [
        {
            "name": "Sudah, siap print",
            "value": "ready"
        },
        {
            "name": "Sudah tapi perlu di Setting lagi",
            "value": "need-setting"
        },
        {
            "name": "Belum, perlu di design",
            "value": "not-ready"
        },
    ]
    const [chooseIsDesignReady, setChooseIsDesignReady] = useState(isDesignReady[0].value);

    const typeKerah = [
        {
            "name": "Model Kerah Standard",
            "value": "standard"
        },
        {
            "name": "Model Kerah lainnya",
            "value": "lainnya"
        }
    ]
    const [chooseTypeKerah, setChooseTypeKerah] = useState(typeKerah[0].value);

    const standarKerah = [
        {
            "name": "O neck",
            "value": "o-neck"
        },
        {
            "name": "V neck",
            "value": "v-neck"
        },
        {
            "name": "V neck tumpul",
            "value": "v-neck-tumpul"
        }
    ]
    const lainnyaKerah = [
        {
            "name": "V neck tanpa rib",
            "value": "v-neck-tanpa-rib"
        },
        {
            "name": "V neck sambung",
            "value": "v-neck-sambung"
        },
        {
            "name": "V neck Modifikasi",
            "value": "v-neck-modifikasi"
        },
        {
            "name": "V neck modifikasi 2",
            "value": "v-neck-modifikasi-2"
        },
        {
            "name": "v neck modifikasi 3",
            "value": "v-neck-modifikasi-3"
        },
        {
            "name": "O neck tumpuk 2 warna",
            "value": "o-neck-tumpuk-2-warna"
        },
        {
            "name": "Kerah nike",
            "value": "kerah-nike"
        },
        {
            "name": "Wangki",
            "value": "wangki"
        },
        {
            "name": "Wangki Zipper",
            "value": "wangki-zipper"
        },
        {
            "name": "V neck wangki",
            "value": "v-neck-wangki"
        },
        {
            "name": "Ragneck Variasi",
            "value": "ragneck-variasi"
        },
        {
            "name": "Chiang-i",
            "value": "chiang-i"
        },
        {
            "name": "Chiang-i kancing",
            "value": "chiang-i-kancing"
        },
        {
            "name": "V neck sambung bahu",
            "value": "v-neck-sambung-bahu"
        }
    ]
    const [chooseKerah, setChooseKerah] = useState("");

    const motives = [
        {
            "name": "Milano",
            "value": "milano"
        },
        {
            "name": "Milano UV",
            "value": "milano-uv"
        },
        {
            "name": "Benzema",
            "value": "benzema"
        },
        {
            "name": "Benzema UV",
            "value": "benzema-uv"
        },
        {
            "name": "Piqe",
            "value": "piqe"
        },
        {
            "name": "Waffle",
            "value": "waffle"
        },
        {
            "name": "Lainnya",
            "value": "lainnya"
        },
    ]
    const [chooseMotive, setChooseMotive] = useState(motives[0].value);

    const [needExtra, setNeedExtra] = useState();

    const jenisTulsanBisban = [
        {
            "name": "polos",
            "value": "polos"
        },
        {
            "name": "tulisan brand di ulang (hasil jadinya akan di konfirmasi oleh admin)",
            "value": "tulisan-diulang"
        },
        {
            "name": "punya design sendiri",
            "value": "design-sendiri"
        }
    ]
    const [chooseJenisTulisanBisban, setChooseJenisTulisanBisban] = useState(jenisTulsanBisban[0].value);

    const designInners = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2"
        },
        {
            "name": "Pilihan 3",
            "value": "pilihan-3"
        },
        {
            "name": "Punya design sendiri",
            "value": "punya-design-sendiri"
        },
    ]
    const [chooseDesignInner, setChooseDesignInner] = useState("")

    const authenticLabel = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2"
        },
        {
            "name": "Pilihan 3",
            "value": "pilihan-3"
        },
        {
            "name": "Punya design sendiri",
            "value": "punya design sendiri"
        },
    ]
    const [chooseAuthenticLabel, setChooseAuthenticLabel] = useState("")

    const zippers = [
        {
            "name": "zipper full dengan saku belakang",
            "value": "zipper-full-dengan-saku-belakang"
        },
        {
            "name": "zipper full tanpa saku belakang",
            "value": "zipper-full-tanpa-saku-belakang"
        },
        {
            "name": "zipper setengah dengan saku belakang",
            "value": "zipper-setengah-dengan-saku-belakang"
        },
        {
            "name": "zipper setengah tanpa saku belakang",
            "value": "zipper-setengah-tanpa-saku-belakang"
        }
    ]
    const [chooseZipper, setChooseZipper] = useState(zippers[0].value);

    const careLabels = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2"
        },
        {
            "name": "Pilihan 3",
            "value": "pilihan-3"
        },
        {
            "name": "Punya design sendiri",
            "value": "punya design sendiri"
        },
    ]
    const [chooseCareLabel, setchooseCareLabel] = useState("")

    const bisbanBawah = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2"
        },
        {
            "name": "Pilihan 3",
            "value": "pilihan-3"
        },
        {
            "name": "Punya design sendiri",
            "value": "punya design sendiri"
        },
    ]
    const [chooseBisbanBawah, setchooseBisbanBawah] = useState("")



    // useEffect(() => {
    //     setImageDesign(URL.createObjectURL(imageDesignFile))
    // }, [imageDesignFile])

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header className="w-full min-h-screen">
                <div className="w-full grid grid-cols-12 items-end overflow-y-auto" style={{ background: 'linear-gradient(60.42deg, #EAD26D -12.2%, rgba(255, 255, 255, 0) 120.53%)' }}>
                    <div className="col-span-1 text-end mb-16 font-bold">
                        Home
                    </div>
                    <div className="col-span-1 text-end mb-16 font-bold">
                        Home
                    </div>
                    <div className="col-span-1 text-end mb-16 font-bold">
                        Home
                    </div>
                    <div className="col-span-8 justify-self-end my-5">
                        <img src="/src/images/example-logo.png"></img>
                    </div>
                    <div className=" col-span-12 font-bold relative flex justify-end">

                        <p className="absolute mt-10 pr-96 xl:text-8xl text-xl">DISC UP TO 50%</p>
                        <img src="/src/images/circle-yellow.png" className="pr-80 mr-6"></img>
                        <p className="pr-96 mr-6 absolute bottom-10 text-2xl font-bold">Scroll Down</p>
                    </div>
                    <img src="/src/images/custom-clothing.png" className="w-full h-auto col-span-12"></img>
                </div>
                <div>

                </div>
            </header> */}

            <main className="pb-10 bg-white">
                <div id="field-2" className="w-full pl-4 pr-6 grid grid-cols-10 gap-4 pt-10">
                    <div className="col-span-10 pl-4">
                        <TextField id="user-name" label="Nama Kamu" variant="standard" className="w-full"
                            value={username}
                            onChange={(val) => {
                                setUsername(val.target.value)
                            }} />
                    </div>
                    <div className="col-span-10 pl-4">
                        <TextField id="order-name" label="Nama Orderan" variant="standard" className="w-full"
                            value={ordername}
                            onChange={(val) => {
                                setOrdername(val.target.value)
                            }} />
                    </div>
                    <div className="col-span-10 pl-4">
                        <TextField id="nomor-telephone" label="Nomor telepon" variant="standard" className="w-full"
                            value={nomorTelphone}
                            onChange={(val) => {
                                setNomorTelphone(val.target.value)
                            }} />
                        <div className="w-full pt-6">
                            <FormControl fullWidth className="w-full pt-10">
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    Kualitas
                                </InputLabel>
                                <NativeSelect
                                    key={"1"}
                                    // defaultValue={30}
                                    inputProps={{
                                        name: 'quality',
                                        id: 'quality',
                                    }}
                                    onChange={(val) => setChooseQuality(val.target.value)}
                                    value={chooseQuality}

                                >
                                    {
                                        qualities.map((item) => {
                                            return <option key={item.name} value={item.value}>{item.name}</option>
                                        })
                                    }
                                </NativeSelect>
                            </FormControl>
                        </div>
                    </div>
                </div>

                {
                    // chooseQuality == "medium" &&
                    <div id="field-1" className="w-full pl-4 pr-6 grid grid-cols-10 gap-4">
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl fullWidth className="w-full pt-10">
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Jenis Jersey
                                    </InputLabel>
                                    <NativeSelect
                                        // defaultValue={30}
                                        key={"2"}
                                        inputProps={{
                                            name: 'jersey',
                                            id: 'jersey',
                                        }}
                                        value={chooseJersey}
                                        onChange={(val) => setChooseJersey(val.target.value)}
                                    >
                                        {
                                            mediumJerseys.map((item) => {
                                                return <option key={item.name} value={item.value}>{item.name}</option>

                                            })
                                        }
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl fullWidth className="flex flex-col justify-start items-start pt-10">
                                    {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Jenis Potongan
                                    </InputLabel> */}
                                    <label>Jenis potongan</label>
                                    <FormGroup>
                                        {
                                            chooseJersey == "futsal" ?
                                                cuttingFutsal.map((item, index) => {
                                                    return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                        var cuttingTemp = chooseCutting;

                                                        if (val.target.checked == true) {
                                                            cuttingTemp.push(`${val.target.value}`);
                                                        } else {
                                                            for (var i = 0; i < cuttingTemp.length; i++) {
                                                                if (cuttingTemp[i] == item.value) {
                                                                    cuttingTemp.splice(i, 1);
                                                                }
                                                                // console.log("TERSISA", cuttingTemp[i]);
                                                            }
                                                        }
                                                        setChooseCutting(cuttingTemp);
                                                    }} />} label={item.name} />
                                                }) :
                                                chooseJersey == "basket" ?
                                                    cuttingBasket.map((item, index) => {
                                                        return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                            var cuttingTemp = chooseCutting;

                                                            if (val.target.checked == true) {
                                                                cuttingTemp.push(`${val.target.value}`);
                                                            } else {
                                                                for (var i = 0; i < cuttingTemp.length; i++) {
                                                                    if (cuttingTemp[i] == item.value) {
                                                                        cuttingTemp.splice(i, 1);
                                                                    }
                                                                    // console.log("TERSISA", cuttingTemp[i]);
                                                                }
                                                            }
                                                            setChooseCutting(cuttingTemp);
                                                        }} />} label={item.name} />
                                                    }) :
                                                    chooseJersey == "gaming" ?
                                                        cuttingGaming.map((item, index) => {
                                                            return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                                var cuttingTemp = chooseCutting;

                                                                if (val.target.checked == true) {
                                                                    cuttingTemp.push(`${val.target.value}`);
                                                                } else {
                                                                    for (var i = 0; i < cuttingTemp.length; i++) {
                                                                        if (cuttingTemp[i] == item.value) {
                                                                            cuttingTemp.splice(i, 1);
                                                                        }
                                                                        // console.log("TERSISA", cuttingTemp[i]);
                                                                    }
                                                                }
                                                                setChooseCutting(cuttingTemp);
                                                            }} />} label={item.name} />
                                                        }) :
                                                        chooseJersey == "running" ?
                                                            cuttingRunning.map((item, index) => {
                                                                return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                                    var cuttingTemp = chooseCutting;

                                                                    if (val.target.checked == true) {
                                                                        cuttingTemp.push(`${val.target.value}`);
                                                                    } else {
                                                                        for (var i = 0; i < cuttingTemp.length; i++) {
                                                                            if (cuttingTemp[i] == item.value) {
                                                                                cuttingTemp.splice(i, 1);
                                                                            }
                                                                            // console.log("TERSISA", cuttingTemp[i]);
                                                                        }
                                                                    }
                                                                    setChooseCutting(cuttingTemp);
                                                                }} />} label={item.name} />
                                                            }) :
                                                            chooseJersey == "tni" ?
                                                                cuttingTNI.map((item, index) => {
                                                                    return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                                        var cuttingTemp = chooseCutting;

                                                                        if (val.target.checked == true) {
                                                                            cuttingTemp.push(`${val.target.value}`);
                                                                        } else {
                                                                            for (var i = 0; i < cuttingTemp.length; i++) {
                                                                                if (cuttingTemp[i] == item.value) {
                                                                                    cuttingTemp.splice(i, 1);
                                                                                }
                                                                                // console.log("TERSISA", cuttingTemp[i]);
                                                                            }
                                                                        }
                                                                        setChooseCutting(cuttingTemp);
                                                                    }} />} label={item.name} />
                                                                }) :
                                                                chooseJersey == "sepeda" ?
                                                                    cuttingSepeda.map((item, index) => {
                                                                        return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                                            var cuttingTemp = chooseCutting;

                                                                            if (val.target.checked == true) {
                                                                                cuttingTemp.push(`${val.target.value}`);
                                                                            } else {
                                                                                for (var i = 0; i < cuttingTemp.length; i++) {
                                                                                    if (cuttingTemp[i] == item.value) {
                                                                                        cuttingTemp.splice(i, 1);
                                                                                    }
                                                                                    // console.log("TERSISA", cuttingTemp[i]);
                                                                                }
                                                                            }
                                                                            setChooseCutting(cuttingTemp);
                                                                        }} />} label={item.name} />
                                                                    }) :
                                                                    cuttingLainnya.map((item, index) => {
                                                                        return <FormControlLabel key={item.name} control={<Checkbox value={item.value} onChange={(val) => {
                                                                            var cuttingTemp = chooseCutting;

                                                                            if (val.target.checked == true) {
                                                                                cuttingTemp.push(`${val.target.value}`);
                                                                            } else {
                                                                                for (var i = 0; i < cuttingTemp.length; i++) {
                                                                                    if (cuttingTemp[i] == item.value) {
                                                                                        cuttingTemp.splice(i, 1);
                                                                                    }
                                                                                    // console.log("TERSISA", cuttingTemp[i]);
                                                                                }
                                                                            }
                                                                            setChooseCutting(cuttingTemp);
                                                                        }} />} label={item.name} />
                                                                    })
                                        }
                                    </FormGroup>

                                    {/* <NativeSelect
                                        // defaultValue={30}
                                        key={"3"}
                                        inputProps={{
                                            name: 'cutting',
                                            id: 'cutting',
                                        }}
                                        value={chooseCutting}
                                        onChange={(val) => setChooseCutting(val.target.value)}>
                                        {
                                            chooseJersey == "futsal" ?
                                                cuttingFutsal.map((item) => {
                                                    return <option key={item.name} value={item.value}>{item.name}</option>

                                                }) :
                                                chooseJersey == "basket" ?
                                                    cuttingBasket.map((item) => {
                                                        return <option key={item.name} value={item.value}>{item.name}</option>

                                                    }) :
                                                    chooseJersey == "gaming" ?
                                                        cuttingGaming.map((item) => {
                                                            return <option key={item.name} value={item.value}>{item.name}</option>

                                                        }) :
                                                        chooseJersey == "running" ?
                                                            cuttingRunning.map((item) => {
                                                                return <option key={item.name} value={item.value}>{item.name}</option>

                                                            }) :
                                                            chooseJersey == "tni" ?
                                                                cuttingTNI.map((item) => {
                                                                    return <option key={item.name} value={item.value}>{item.name}</option>

                                                                }) :
                                                                chooseJersey == "sepeda" ?
                                                                    cuttingSepeda.map((item) => {
                                                                        return <option key={item.name} value={item.value}>{item.name}</option>
                                                                    }) :
                                                                    cuttingLainnya.map((item) => {
                                                                        return <option key={item.name} value={item.value}>{item.name}</option>

                                                                    })


                                        }
                                    </NativeSelect> */}
                                </FormControl>
                            </div>
                        </div>
                        {
                            chooseJersey == "sepeda" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Jenis Zipper
                                        </InputLabel>
                                        <NativeSelect
                                            // defaultValue={30}
                                            key={"4"}
                                            inputProps={{
                                                name: 'zipper',
                                                id: 'zipper',
                                            }}
                                            value={chooseZipper}
                                            onChange={(val) => setChooseZipper(val.target.value)}
                                        >
                                            {
                                                zippers.map((item) => {
                                                    return <option key={item.name} value={item.value}>{item.name}</option>
                                                })
                                            }
                                        </NativeSelect>
                                    </FormControl>
                                </div>
                            </div>
                        }
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl fullWidth className="w-full pt-10">
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Jenis Pola
                                    </InputLabel>
                                    <NativeSelect
                                        // defaultValue={30}
                                        key={"5"}
                                        inputProps={{
                                            name: 'pola',
                                            id: 'pola',
                                        }}
                                        value={choosePola}
                                        onChange={(val) => setChoosePola(val.target.value)}
                                    >
                                        {
                                            polas.map((item) => {
                                                return <option key={item.name} value={item.value}>{item.name}</option>
                                            })
                                        }
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                }

                {
                    <div id="field-3" className="w-full pl-4 pr-6 grid grid-cols-10 gap-4">
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl fullWidth className="w-full pt-10">
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Apakah design sudah ada ?
                                    </InputLabel>
                                    <NativeSelect
                                        // defaultValue={30}
                                        key={"6"}
                                        inputProps={{
                                            name: 'isDesignReady',
                                            id: 'isDesignReady',
                                        }}
                                        value={chooseIsDesignReady}
                                        onChange={(val) => setChooseIsDesignReady(val.target.value)}
                                    >
                                        {
                                            isDesignReady.map((item) => {
                                                return <option key={item.name} value={item.value}>{item.name}</option>

                                            })
                                        }
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-span-10 pl-4">
                            {/* <Button variant="contained"
                                component="Upload File"> */}
                            {
                                // <img id="iframe-target" className="w-56 h-auto" />

                            }
                            <p className="text-sm mb-2">
                                Upload Design Image
                            </p>
                            <input
                                type="file"
                                aria-label="Upload designmu"
                                onChange={(val) => {
                                    // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                    // var url = window.URL.createObjectURL(blobObj);
                                    // document.getElementById("iframe-target").setAttribute("src", url);
                                    setImageDesignFile(val.target.files[0]);
                                }}
                            />
                            {/* </Button> */}
                        </div>
                        <div className="col-span-10 pl-4">
                            <TextField id="description" label="Keterangan Design" variant="standard" className="w-full"
                                value={description}
                                onChange={(val) => {
                                    setDescription(val.target.value)
                                }} />
                        </div>
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl fullWidth className="w-full pt-10">
                                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                        Type Kerah
                                    </InputLabel>
                                    <NativeSelect
                                        // defaultValue={30}
                                        key={"7"}
                                        inputProps={{
                                            name: 'typeKerah',
                                            id: 'typeKerah',
                                        }}
                                        value={chooseTypeKerah}
                                        onChange={(val) => setChooseTypeKerah(val.target.value)}
                                    >
                                        {
                                            typeKerah.map((item) => {
                                                if (chooseQuality == "basic" && item.value == "lainnya") {
                                                    return ""
                                                } else {
                                                    return <option key={item.name} value={item.value}>{item.name}</option>
                                                }
                                            })
                                        }
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl fullWidth className="w-full pt-10">
                                    <FormLabel id="demo-controlled-radio-buttons-group"> {
                                        chooseTypeKerah == "standard" ? "Pilih standar kerah" : "Pilih kerah lainnya"
                                    }</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group-pilih-standar-kerah"
                                        value={chooseKerah}
                                        onChange={(val) => {
                                            setChooseKerah(val.target.value)
                                        }}
                                    >
                                        {
                                            chooseTypeKerah == "standard" ?
                                                standarKerah.map((item) => {
                                                    return <FormControlLabel value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                        {item.name}
                                                        {
                                                            item.value !== authenticLabel[3].value ?
                                                                <img src="/src/images/example-label.png" className=" ml-5 w-24 h-auto" /> : ""
                                                        }
                                                    </div>} />

                                                }) :
                                                lainnyaKerah.map((item) => {
                                                    return <FormControlLabel value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                        {item.name}
                                                        {
                                                            item.value !== authenticLabel[3].value ?
                                                                <img src="/src/images/example-label.png" className=" ml-5 w-24 h-auto" /> : ""
                                                        }
                                                    </div>} />

                                                })
                                        }

                                    </RadioGroup>
                                    <NativeSelect
                                        // defaultValue={30}
                                        key={"8"}
                                        inputProps={{
                                            name: 'jenisKerah',
                                            id: 'jenisKerah',
                                        }}
                                        value={chooseKerah}
                                        onChange={(val) => setChooseKerah(val.target.value)}
                                    >

                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        {
                            chooseQuality != "basic" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Pilih Motif Kain
                                        </InputLabel>
                                        <NativeSelect
                                            // defaultValue={30}
                                            key={"9"}
                                            inputProps={{
                                                name: 'motive',
                                                id: 'motive',
                                            }}
                                            value={chooseMotive}
                                            onChange={(val) => setChooseMotive(val.target.value)}
                                        >
                                            {
                                                motives.map((item) => {
                                                    if (item.value == "milano-uv" || item.value == "benzema-uv") {
                                                        if (chooseQuality == "premium") {
                                                            return <option key={item.name} value={item.value}>{item.name}</option>
                                                        } else {
                                                            return ""
                                                        }
                                                    } else {
                                                        return <option key={item.name} value={item.value}>{item.name}</option>
                                                    }

                                                })
                                            }
                                        </NativeSelect>
                                    </FormControl>
                                </div>
                            </div>
                        }
                        <div className="col-span-10 pl-4">
                            <div className="w-full pt-6">
                                <FormControl className="flex">
                                    <FormLabel id="demo-controlled-radio-buttons-group">Mau Pakai Detail Tambahan ?</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={needExtra}
                                        onChange={(val) => setNeedExtra(val.target.value)}
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Ya" />
                                        <FormControlLabel value="no" control={<Radio />} label="Tidak" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>

                        {
                            needExtra == "yes" && chooseQuality != "basic" && <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                            Jenis Tulisan Bisban
                                        </InputLabel>
                                        <NativeSelect
                                            // defaultValue={30}
                                            key={"10"}
                                            inputProps={{
                                                name: 'jenisTulisanBisban',
                                                id: 'jenisTulisanBisban',
                                            }}
                                            value={chooseJenisTulisanBisban}
                                            onChange={(val) => setChooseJenisTulisanBisban(val.target.value)}
                                        >
                                            {
                                                jenisTulsanBisban.map((item) => {
                                                    return <option key={item.name} value={item.value}>{item.name}</option>

                                                })
                                            }
                                        </NativeSelect>
                                    </FormControl>
                                </div>
                            </div>
                        }
                        {
                            needExtra == "yes" && chooseQuality != "basic" && chooseJenisTulisanBisban == jenisTulsanBisban[2].value &&
                            <div className="col-span-10 pl-4">
                                {/* <Button variant="contained"
                                component="Upload File"> */}
                                {
                                    // <img id="iframe-target" className="w-56 h-auto" />

                                }
                                <p className="text-sm mb-2">
                                    Upload Design Tulisan Bisban
                                </p>
                                <input
                                    type="file"
                                    aria-label="Upload tulisan bisban"
                                    onChange={(val) => {
                                        // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                        // var url = window.URL.createObjectURL(blobObj);
                                        // document.getElementById("iframe-target").setAttribute("src", url);
                                        setImageTulisanBisban(val.target.files[0]);
                                    }}
                                />
                                {/* </Button> */}
                            </div>
                        }
                        {
                            needExtra == "yes" && chooseQuality != "basic" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <FormLabel id="demo-controlled-radio-buttons-group-pilihan-design-inner"> Pilihan Design Inner</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={chooseDesignInner}
                                            onChange={(val) => {
                                                setChooseDesignInner(val.target.value)
                                            }}
                                        >
                                            {
                                                designInners.map((item) => {
                                                    return <FormControlLabel value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== designInners[3].value ?
                                                                <img src="/src/images/example-label.png" className=" ml-5 w-24 h-auto" /> : ""
                                                        }
                                                    </div>} />

                                                })
                                            }

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        }
                        {
                            needExtra == "yes" && chooseQuality != "basic"
                            && chooseDesignInner == designInners[3].value &&
                            <div className="col-span-10 pl-4">
                                {/* <Button variant="contained"
                                component="Upload File"> */}
                                {
                                    // <img id="iframe-target" className="w-56 h-auto" />

                                }
                                <p className="text-sm mb-2">
                                    Upload Design Inner
                                </p>
                                <input
                                    type="file"
                                    aria-label="Upload Design Inner (Sablon DTF)"
                                    onChange={(val) => {
                                        // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                        // var url = window.URL.createObjectURL(blobObj);
                                        // document.getElementById("iframe-target").setAttribute("src", url);
                                        setImageDesignInner(val.target.files[0]);
                                    }}
                                />
                                {/* </Button> */}
                            </div>
                        }
                        {
                            needExtra == "yes" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <FormLabel id="demo-controlled-radio-buttons-group"> Pilih Authentic Label</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group-pilih-authentic-label"
                                            value={chooseAuthenticLabel}
                                            onChange={(val) => {
                                                setChooseAuthenticLabel(val.target.value)
                                            }}
                                        >
                                            {
                                                authenticLabel.map((item) => {
                                                    return <FormControlLabel value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== authenticLabel[3].value ?
                                                                <img src="/src/images/example-label.png" className=" ml-5 w-24 h-auto" /> : ""
                                                        }
                                                    </div>} />

                                                })
                                            }

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        }
                        {
                            needExtra == "yes"
                            && chooseAuthenticLabel == authenticLabel[3].value &&
                            <div className="col-span-10 pl-4">
                                {/* <Button variant="contained"
                                component="Upload File"> */}
                                {
                                    // <img id="iframe-target" className="w-56 h-auto" />

                                }
                                <p className="text-sm mb-2">
                                    Upload Authentic Label
                                </p>
                                <input
                                    type="file"
                                    aria-label="Upload Authentic Label"
                                    onChange={(val) => {
                                        // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                        // var url = window.URL.createObjectURL(blobObj);
                                        // document.getElementById("iframe-target").setAttribute("src", url);
                                        setImageAuthenticLabel(val.target.files[0]);
                                    }}
                                />
                                {/* </Button> */}
                            </div>
                        }
                        {
                            needExtra == "yes" && chooseQuality == "premium" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <FormLabel id="demo-controlled-radio-buttons-group"> Pilih Care Label</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group-pilih-care-label"
                                            value={chooseCareLabel}
                                            onChange={(val) => {
                                                setchooseCareLabel(val.target.value)
                                            }}
                                        >
                                            {
                                                careLabels.map((item) => {
                                                    return <FormControlLabel value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== careLabels[3].value ?
                                                                <img src="/src/images/example-label.png" className=" ml-5 w-24 h-auto" /> : ""
                                                        }
                                                    </div>} />

                                                })
                                            }

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        }
                        {
                            needExtra == "yes" &&
                            chooseQuality == "premium" && chooseCareLabel == careLabels[3].value &&
                            <div className="col-span-10 pl-4">
                                {/* <Button variant="contained"
                                component="Upload File"> */}
                                {
                                    // <img id="iframe-target" className="w-56 h-auto" />

                                }
                                <p className="text-sm mb-2">
                                    Upload Care Label
                                </p>
                                <input
                                    type="file"
                                    aria-label="Upload Care Label"
                                    onChange={(val) => {
                                        // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                        // var url = window.URL.createObjectURL(blobObj);
                                        // document.getElementById("iframe-target").setAttribute("src", url);
                                        setImageCareLabel(val.target.files[0]);
                                    }}
                                />
                                {/* </Button> */}
                            </div>
                        }
                        {
                            needExtra == "yes" && chooseQuality == "premium" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <FormLabel id="demo-controlled-radio-buttons-group"> Pilih Bisban Bawah</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group-pilih-bisban-bawah"
                                            value={chooseBisbanBawah}
                                            onChange={(val) => {
                                                setchooseBisbanBawah(val.target.value)
                                            }}
                                        >
                                            {
                                                bisbanBawah.map((item) => {
                                                    return <FormControlLabel value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== bisbanBawah[3].value ?
                                                                <img src="/src/images/example-label.png" className=" ml-5 w-24 h-auto" /> : ""
                                                        }
                                                    </div>} />

                                                })
                                            }

                                        </RadioGroup>

                                    </FormControl>
                                </div>
                            </div>
                        }
                        {
                            needExtra == "yes" &&
                            chooseQuality == "premium" && chooseBisbanBawah == careLabels[3].value &&
                            <div className="col-span-10 pl-4">
                                {/* <Button variant="contained"
                                component="Upload File"> */}
                                {
                                    // <img id="iframe-target" className="w-56 h-auto" />

                                }
                                <p className="text-sm mb-2">
                                    Upload Bisban Bawah
                                </p>
                                <input
                                    type="file"
                                    aria-label="Upload Bisban Bawah"
                                    onChange={(val) => {
                                        // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                        // var url = window.URL.createObjectURL(blobObj);
                                        // document.getElementById("iframe-target").setAttribute("src", url);
                                        setImageBisbanBawah(val.target.files[0]);
                                    }}
                                />
                                {/* </Button> */}
                            </div>
                        }
                    </div>
                }
                {
                    <div id="field-2" className="w-full pl-4 pr-6 grid grid-cols-10 gap-4">
                        <div className="col-span-10 pl-4 pt-8">
                            <TextField id="sum-pcs" label="Jumlah per-pcs" variant="standard" className="w-full"
                                value={sumPcs}
                                onChange={(val) => {
                                    setSumPcs(val.target.value)
                                }} />
                        </div>
                        <div className="col-span-10 pl-4">
                            {/* <Button variant="contained"
                                component="Upload File"> */}
                            {
                                // <img id="iframe-target" className="w-56 h-auto" />

                            }
                            <p className="text-sm mb-2">
                                Upload file berisi Nama, no, size, catatan untuk per-pcs
                            </p>
                            <input
                                type="file"
                                aria-label="Upload File Nama, no, size, catatan untuk per-pcs"
                                onChange={(val) => {
                                    // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                    // var url = window.URL.createObjectURL(blobObj);
                                    // document.getElementById("iframe-target").setAttribute("src", url);
                                    setFileUkuran(val.target.files[0]);
                                }}
                            />
                            {/* </Button> */}
                        </div>
                        {
                            sumPcs &&
                            <div className="col-span-10 pl-4">
                                <p>{sumPcs < 20 ?
                                    " Estimasi Selesai : 5 hari kerja " :
                                    sumPcs < 50 ? " Estimasi Selesai : 7 hari kerja " :
                                        sumPcs < 100 ? " Estimasi Selesai : 14 hari kerja " :
                                            "Order kamu sedang kami proses, admin terkait akan menghubungi kamu jika ada detail yang perlu di konfirmasi. terima kasih"}
                                    <br />
                                    *Setting + 1 hari
                                    <br />
                                    *Design + 3 hari

                                </p>
                            </div>
                        }
                        {
                            sumPcs &&
                            <div className="col-span-10 pl-4">
                                <button className=" bg-yellow-500 rounded-xl py-2 px-10 text-black shadow-xl font-semibold text-xl hover:scale-105" onClick={() => {
                                    alert("Terima kasih atas pemesanannya :) \nPesananmu sudah sampai pada admin kami.")
                                }}>
                                    Pesan Sekarang
                                </button>
                            </div>
                        }
                    </div>
                }

            </main>

            <footer>
                {/* <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a> */}
            </footer>
        </>
    )
}

export default HomePage;