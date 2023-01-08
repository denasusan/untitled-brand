import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, NativeSelect, Radio, RadioGroup, TextField } from "@material-ui/core";
import Head from "next/head"
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

const HomePage = () => {
    const [username, setUsername] = useState("");
    const [ordername, setOrdername] = useState("");
    const [nomorTelphone, setNomorTelphone] = useState("");
    const [description, setDescription] = useState("");
    const [imageDesign, setImageDesign] = useState("");
    const [imageDesignFile, setImageDesignFile] = useState("");
    const [imageTulisanBisban, setImageTulisanBisban] = useState("");
    const [imageDesignInner, setImageDesignInner] = useState("");
    const [imageDesignInnerKerah, setImageDesignInnerKerah] = useState("");
    const [imageAuthenticLabel, setImageAuthenticLabel] = useState("");
    const [imageBisbanBawah, setImageBisbanBawah] = useState("");
    const [imageCareLabel, setImageCareLabel] = useState("");
    const [fileUkuran, setFileUkuran] = useState();
    const [sumPcsDewasa, setSumPcsDewasa] = useState(0);
    const [sumPcsChild, setSumPcsChild] = useState(0);
    const [sum, setSum] = useState(0);
    const [pricePerPcs, setPricePerPcs] = useState(0);
    const [feeDesign, setFeeDesign] = useState(0);
    const [openPesanan, setOpenPesanan] = useState(false);

    const qualities = [
        {
            "name": "Medium (start from 80K)",
            "value": "medium",
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
    const [chooseQuality, setChooseQuality] = useState(qualities[0].value)

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
            "value": "baju-lengan-pendek",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Baju lengan panjang",
            "value": "baju-lengan-panjang",
            "price": {
                "medium": 90000,
                "premium": 110000,
                "basic": 75000
            }
        },
        {
            "name": "Celana atau Setelan Pendek",
            "value": "celana",
            "price": {
                "medium": 55000,
                "premium": 175000,
                "basic": 110000
            }
        },
        {
            "name": "Lekbong",
            "value": "lekbong",
            "price": {
                "medium": 75000,
                "premium": 90000,
                "basic": 60000
            }
        },
    ]
    const cuttingBasket = [
        {
            "name": "Atasan Basket",
            "value": "atasan-basket",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Celana Basket",
            "value": "celana-basket",
            "price": {
                "medium": 55000,
                "premium": 75000,
                "basic": 45000
            }
        },
        {
            "name": "Baju Lengan Pendek",
            "value": "baju-lengan-pendek",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Lainnya",
            "value": "lainnya",
            "price": {
                "medium": 0,
                "premium": 0,
                "basic": 0
            }
        },
    ]
    const cuttingGaming = [
        {
            "name": "Celana Panjang",
            "value": "celana-panjang",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Baju Lengan Pendek",
            "value": "baju-lengan-pendek",
            "price": {
                "medium": 75000,
                "premium": 95000,
                "basic": 60000
            }
        },
        {
            "name": "Lainnya",
            "value": "lainnya",
            "price": {
                "medium": 0,
                "premium": 0,
                "basic": 0
            }
        },
    ]
    const cuttingRunning = [
        {
            "name": "Lengan Pendek",
            "value": "lengan-pendek",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Lekbong",
            "value": "lekbong",
            "price": {
                "medium": 75000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Celana Pendek",
            "value": "celana-pendek",
            "price": {
                "medium": 55000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Celana Panjang",
            "value": "celna-panjang",
            "price": {
                "medium": 75000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Lainnya",
            "value": "lainnya",
            "price": {
                "medium": 0,
                "premium": 0,
                "basic": 0
            }
        },
    ]
    const cuttingTNI = [
        {
            "name": "Celana Panjang",
            "value": "celana-panjang",
            "price": {
                "medium": 90000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Baju Lengan Pendek",
            "value": "baju-lengan-pendek",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Lainnya",
            "value": "lainnya",
            "price": {
                "medium": 0,
                "premium": 0,
                "basic": 0
            }
        },
    ]
    const cuttingSepeda = [
        {
            "name": "MTB Tangan Panjang",
            "value": "mtb-tangan-panjang",
            "price": {
                "medium": 90000,
                "premium": 110000,
                "basic": 75000
            }
        },
        {
            "name": "Pola Roadbike tangan pendek",
            "value": "pola-roadbike-tangan-pendek",
            "price": {
                "medium": 80000,
                "premium": 100000,
                "basic": 65000
            }
        },
        {
            "name": "Roadbike tangan Panjang",
            "value": "roadbike-tangan-panjang",
            "price": {
                "medium": 90000,
                "premium": 110000,
                "basic": 75000
            }
        },
    ]
    const cuttingLainnya = [
        {
            "name": "Baju lengan pendek",
            "value": "baju-lengan-pendek",
            "price": {
                "medium": 80000,
                "premium": 80000,
                "basic": 80000
            }
        },
        {
            "name": "Baju lengan panjang",
            "value": "baju-lengan-panjang",
            "price": {
                "medium": 90000,
                "premium": 90000,
                "basic": 90000
            }
        },
        {
            "name": "Celana lengan pendek",
            "value": "celana-lengan-pendek",
            "price": {
                "medium": 55000,
                "premium": 55000,
                "basic": 55000
            }
        },
        {
            "name": "Celana lengan panjang",
            "value": "celana-lengan-panjang",
            "price": {
                "medium": 75000,
                "premium": 75000,
                "basic": 75000
            }
        },
    ]
    const [chooseCutting, setChooseCutting] = useState([]);

    const polas = [
        {
            "name": "Oblong",
            "value": "oblong",
            "type_image": "jpeg",
            "price": {
                "medium": 0,
            }
        },
        {
            "name": "Raglan",
            "value": "raglan",
            "type_image": "jpeg",
            "price": {
                "medium": 10000,
            }
        }
    ]
    const [choosePola, setChoosePola] = useState(polas[0].value);

    const isDesignReady = [
        {
            "name": "Sudah, siap print",
            "value": "ready",
            "price": {
                "medium": 0,
            }
        },
        {
            "name": "Sudah tapi perlu di Setting lagi",
            "value": "need-setting",
            "price": {
                "medium": 20000,
            }
        },
        {
            "name": "Belum, perlu di design",
            "value": "not-ready",
            "price": {
                "medium": 50000,
            }
        },
    ]
    const [chooseIsDesignReady, setChooseIsDesignReady] = useState(isDesignReady[0].value);

    const typeKerah = [
        {
            "name": "Model Kerah Standard",
            "value": "standard"
        },
        {
            "name": "Model Kerah lainnya 1",
            "value": "lainnya-1"
        },
        {
            "name": "Model Kerah lainnya 2",
            "value": "lainnya-2"
        },
        {
            "name": "Model Kerah lainnya (Gratis)",
            "value": "lainnya-gratis"
        }
    ]
    const [chooseTypeKerah, setChooseTypeKerah] = useState(typeKerah[0].value);

    const standarKerah = [
        {
            "name": "O neck",
            "value": "o-neck",
            "type_image": "jpeg"
        },
        {
            "name": "V neck",
            "value": "v-neck",
            "type_image": "png"
        },
        {
            "name": "V neck tumpul",
            "value": "v-neck-tumpuk",
            "type_image": "png"
        },
        {
            "name": "V neck modifikasi",
            "value": "v-neck-modifikasi",
            "type_image": "png"
        }
    ]
    const lainnyaKerah = [
        {
            "name": "V neck tanpa rib",
            "value": "v-neck-tanpa-rib",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "V neck sambung",
            "value": "v-neck-sambung",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "V neck Modifikasi",
            "value": "v-neck-modifikasi",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "V neck modifikasi 2",
            "value": "v-neck-modifikasi-2",
            "price": {
                "medium": 10000
            }
        },
        {
            "name": "v neck modifikasi 3",
            "value": "v-neck-modifikasi-3",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "O neck tumpuk 2 warna",
            "value": "o-neck-tumpuk-2-warna",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "Kerah nike",
            "value": "kerah-nike",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "Wangki",
            "value": "wangki",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "Wangki Zipper",
            "value": "wangki-zipper",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "V neck wangki",
            "value": "v-neck-wangki",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "Ragneck Variasi",
            "value": "ragneck-variasi",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "Chiang-i",
            "value": "chiang-i",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "Chiang-i kancing",
            "value": "chiang-i-kancing",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "V neck sambung bahu",
            "value": "v-neck-sambung-bahu",
            "price": {
                "medium": 0
            }
        }
    ]

    const lainnyaKerah1 = [
        {
            "name": "chiang i unique",
            "value": "chiang-i-unique",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "chiang i v neck insert",
            "value": "chiang-i-v-neck-insert",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "chiang i",
            "value": "chiang i",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "modifikasi tumpul",
            "value": "modifikasi tumpuk",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "nike 2016",
            "value": "nike 2016",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "nike wave",
            "value": "nike wave",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "ragneck variasi",
            "value": "ragneck variasi",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "v neck sambung bahu",
            "value": "v neck sambung bahu",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "v neck side",
            "value": "v neck side",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "v neck vertical",
            "value": "v neck vertical",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
    ]

    const lainnyaKerah2 = [
        {
            "name": "chiang i kancing",
            "value": "chiang i kancing",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "chiang i kancing - 2",
            "value": "chiang i kancing - 2",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "jersey cycling",
            "value": "jersey cycling",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "o neck as monaco",
            "value": "o neck as monaco",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "turtle neck zipper",
            "value": "turtle neck zipper",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "turtle neck",
            "value": "turtle neck",
            "type": "png",
            "price": {
                "medium": 0
            }
        },
        {
            "name": "v neck wangki",
            "value": "v neck wangki",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "wangki high collar",
            "value": "wangki high collar",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "wangki insert",
            "value": "wangki insert",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "wangki zipper",
            "value": "wangki zipper",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
        {
            "name": "wangki",
            "value": "wangki",
            "type": "png",
            "price": {
                "medium": 20000
            }
        },
    ]

    const lainnyaKerahFree = [
        {
            "name": "modifikasi",
            "value": "modifikasi",
            "type": "png"
        },
        {
            "name": "nike",
            "value": "nike",
            "type": "png"
        },
        {
            "name": "o neck tumpuk",
            "value": "o neck tumpuk",
            "type": "png"
        },
        {
            "name": "shanghai no button",
            "value": "shanghai no button",
            "type": "png"
        },
        {
            "name": "v neck basket",
            "value": "v neck basket",
            "type": "png"
        },
        {
            "name": "v neck kombinasi",
            "value": "v neck kombinasi",
            "type": "png"
        },
        {
            "name": "v neck modifikasi",
            "value": "v neck modifikasi--",
            "type": "png"
        },
        {
            "name": "v neck modifikasi",
            "value": "v neck modifikasi",
            "type": "png"
        },
        {
            "name": "v neck tanpa rib",
            "value": "v neck tanpa rib",
            "type": "png"
        },
    ]

    const [chooseKerah, setChooseKerah] = useState("");

    const motives = [
        {
            "name": "Milano (Type Jersey)",
            "value": "milano",
            "type_image": "png"
        },
        {
            "name": "Milano UV (Type Jersey)",
            "value": "milano-uv"
        },
        {
            "name": "Benzema (Type Jersey)",
            "value": "benzema",
            "type_image": "png"
        },
        {
            "name": "Benzema UV (Type Jersey)",
            "value": "benzema-uv"
        },
        {
            "name": "Sido Pique (Type Jersey)",
            "value": "sido-pique",
            "type_image": "png"
        },
        {
            "name": "Waffle (Type Jersey)",
            "value": "waffle",
            "type_image": "png"
        },
        {
            "name": "Diadora (Type Jaket)",
            "value": "diadora",
            "type_image": "png"
        },
        {
            "name": "Jaring (Type Jaket)",
            "value": "jaring",
            "type_image": "png"
        },
        {
            "name": "Lotto (Type Jaket)",
            "value": "lotto",
            "type_image": "png"
        },
        {
            "name": "Parasut (Type Jaket)",
            "value": "parasut",
            "type_image": "png"
        },
        {
            "name": "Taslan (Type Jaket)",
            "value": "taslan",
            "type_image": "png"
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
            "value": "tulisan-diulang",
            "type_image": "jpg"
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
            "value": "pilihan-1",
            "type_image": "jpeg"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2",
            "type_image": "jpeg"
        },
        // {
        //     "name": "Pilihan 3",
        //     "value": "pilihan-3"
        // },
        {
            "name": "Punya design sendiri",
            "value": "punya-design-sendiri"
        },
    ]
    const [chooseDesignInner, setChooseDesignInner] = useState("")

    const designInnerKerah = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1",
            "type_image": "jpeg"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2",
            "type_image": "jpeg"
        },
        // {
        //     "name": "Pilihan 3",
        //     "value": "pilihan-3"
        // },
        {
            "name": "Punya design sendiri",
            "value": "punya-design-sendiri"
        },
    ]
    const [chooseDesignInnerKerah, setChooseDesignInnerKerah] = useState("")

    const authenticLabel = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1",
            "type_image": "jpeg"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2",
            "type_image": "jpg"
        },
        // {
        //     "name": "Pilihan 3",
        //     "value": "pilihan-3"
        // },
        {
            "name": "Punya design sendiri",
            "value": "punya-design-sendiri"
        },
    ]
    const [chooseAuthenticLabel, setChooseAuthenticLabel] = useState("")

    const zippers = [
        {
            "name": "zipper full dengan saku belakang",
            "value": "zipper-full-dengan-saku-belakang",
            "price": {
                "medium": 30000,
            }
        },
        {
            "name": "zipper full tanpa saku belakang",
            "value": "zipper-full-tanpa-saku-belakang",
            "price": {
                "medium": 20000,
            }
        },
        {
            "name": "zipper setengah dengan saku belakang",
            "value": "zipper-setengah-dengan-saku-belakang",
            "price": {
                "medium": 25000,
            }
        },
        {
            "name": "zipper setengah tanpa saku belakang",
            "value": "zipper-setengah-tanpa-saku-belakang",
            "price": {
                "medium": 20000,
            }
        }
    ]
    const [chooseZipper, setChooseZipper] = useState(zippers[0].value);

    const careLabels = [
        {
            "name": "Pilihan 1",
            "value": "pilihan-1",
            "type_image": "jpeg"
        },
        {
            "name": "Pilihan 2",
            "value": "pilihan-2",
            "type_image": "jpeg"
        },
        // {
        //     "name": "Pilihan 3",
        //     "value": "pilihan-3"
        // },
        {
            "name": "Punya design sendiri",
            "value": "punya-design-sendiri"
        },
    ]
    const [chooseCareLabel, setchooseCareLabel] = useState("")

    const bisbanBawah = [
        {
            "name": "Pilihan 1",
            "value": "tulisan-diulang",
            "type_image": "jpg"
        },
        // {
        //     "name": "Pilihan 2",
        //     "value": "pilihan-2"
        // },
        // {
        //     "name": "Pilihan 3",
        //     "value": "pilihan-3"
        // },
        {
            "name": "Punya design sendiri",
            "value": "punya-design-sendiri"
        },
    ]
    const [chooseBisbanBawah, setchooseBisbanBawah] = useState("")



    // useEffect(() => {
    //     setImageDesign(URL.createObjectURL(imageDesignFile))
    // }, [imageDesignFile])

    const getRupiah = ({ number }) => {
        let numberString = number.toString().replace(/^0+/, '');
        if (numberString.length > 3) {
            let over = numberString.length % 3;
            let rupiah = numberString.substr(0, over);
            let thousand = numberString.substr(over).match(/\d{3}/g);
            if (thousand) {
                const separator = over ? '.' : '';
                rupiah += separator + thousand.join('.');
                return rupiah;
            } else {
                return number;
            }
        } else {
            return number;
        }
    }

    useEffect(() => {
        setSum(parseInt(sumPcsChild ? sumPcsChild : 0) + parseInt(sumPcsDewasa ? sumPcsDewasa : 0));
    }, [sumPcsChild || sumPcsDewasa])

    useEffect(() => {
        setChooseCutting([])
    }, [chooseJersey])

    useLayoutEffect(() => {
        // console.log("MASUK SINI")
        if (chooseQuality) {
            const quality = chooseQuality;
            let sumPrice = 0;
            try {
                // console.log("ASDASD", chooseCutting.length)
                if (chooseJersey == "futsal") {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingFutsal.length; j++) {
                            if (cuttingFutsal[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingFutsal[j].price.medium;
                            }
                        }
                    }
                }
                else if (chooseJersey == "basket") {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingBasket.length; j++) {
                            if (cuttingBasket[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingBasket[j].price.medium;
                            }
                        }
                    }
                }
                else if (chooseJersey == "gaming") {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingGaming.length; j++) {
                            if (cuttingGaming[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingGaming[j].price.medium;
                            }
                        }
                    }
                }
                else if (chooseJersey == "running") {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingRunning.length; j++) {
                            if (cuttingRunning[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingRunning[j].price.medium;
                            }
                        }
                    }
                }
                else if (chooseJersey == "tni") {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingTNI.length; j++) {
                            if (cuttingTNI[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingTNI[j].price.medium;
                            }
                        }
                    }
                }
                else if (chooseJersey == "sepeda") {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingSepeda.length; j++) {
                            if (cuttingSepeda[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingSepeda[j].price.medium;
                            }
                        }
                    }
                }
                else {
                    for (let i = 0; i < chooseCutting.length; i++) {
                        for (let j = 0; j < cuttingLainnya.length; j++) {
                            if (cuttingLainnya[j].value == chooseCutting[i]) {
                                sumPrice = sumPrice + cuttingLainnya[j].price.medium;
                            }
                        }
                    }
                }

                // console.log("ASDASD", chooseJersey)

                if (chooseJersey == "sepeda") {
                    for (let j = 0; j < zippers.length; j++) {
                        if (zippers[j].value == chooseZipper) {
                            sumPrice = sumPrice + zippers[j].price.medium;
                        }
                    }
                }

                // sumPrice = sumPrice + choosePola?.price?.medium;
                for (let j = 0; j < polas.length; j++) {
                    if (polas[j].value == choosePola) {
                        sumPrice = sumPrice + polas[j].price.medium;
                    }
                }

                if (choosePola == "oblong") {
                    if (chooseIsDesignReady) {
                        for (let j = 0; j < isDesignReady.length; j++) {
                            if (isDesignReady[j].value == chooseIsDesignReady) {
                                // sumPrice = sumPrice + isDesignReady[j].price.medium;
                                setFeeDesign(isDesignReady[j].price.medium);
                            }
                        }
                    }
                }

                if (chooseTypeKerah == "lainnya-1") {
                    for (let j = 0; j < lainnyaKerah1.length; j++) {
                        if (lainnyaKerah1[j].value == chooseKerah) {
                            sumPrice = sumPrice + lainnyaKerah1[j].price.medium;
                        }
                    }
                } else if (chooseKerah == "lainnya-2") {
                    for (let j = 0; j < lainnyaKerah2.length; j++) {
                        if (lainnyaKerah2[j].value == chooseTypeKerah) {
                            sumPrice = sumPrice + lainnyaKerah2[j].price.medium;
                        }
                    }
                }

            } catch (error) {
                console.log("ERROR", error);

            }
            // console.log("DASDSAd", sumPrice)
            setPricePerPcs(sumPrice);

        } else {
            // console.log("MASUK SINO");
        }
    })


    return (
        <>
            <Head>
                <title>Untitled Brand</title>
                <meta name="description" content="Untitled Brand App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header className="w-full min-h-screen">
                <div className="w-full grid grid-cols-12 items-end overflow-y-auto" style={{ background: 'linear-gradient(60.42deg || #EAD26D -12.2%, rgba(255, 255, 255, 0) 120.53%)' }}>
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

            <main className="pb-10 bg-white relative">
                <div class={`${openPesanan == true ? "scale-100" : "scale-0"} z-50 transition duration-500 bg-black text-center py-4 h-screen w-full fixed lg:px-4 bg-opacity-50 flex justify-center items-center`}>
                    <div class="p-2 bg-indigo-800 max-w-lg text-left text-indigo-100 mx-3 px-3 leading-none rounded-xl flex flex-col " role="alert">
                        {/* <p class="flex self-center rounded-full bg-indigo-500 uppercase px-2 text-xs font-bold py-2 my-2">Pesanan Kamu</p> */}
                        <p class="mb-2 font-semibold mr-2 text-center pt-2">Orderan {ordername} ({nomorTelphone})</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Kualitas: {qualities.find(val => val.value == chooseQuality).name}</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Jenis Jersery: {chooseJersey}</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Jenis Potongan: {chooseCutting.map((item) => {
                            if (chooseJersey == "futsal") {
                                return <span>{cuttingFutsal.find(val => val.value == item).name} <br/> </span>
                            }
                            else if (chooseJersey == "basket") {
                                return <span>{cuttingBasket.find(val => val.value == item).name} <br/> </span>
                            }
                            else if (chooseJersey == "gaming") {
                                return <span>{cuttingGaming.find(val => val.value == item).name} <br/> </span>
                            }
                            else if (chooseJersey == "running") {
                                return <span>{cuttingRunning.find(val => val.value == item).name} <br/> </span>
                            }
                            else if (chooseJersey == "tni") {
                                return <span>{cuttingTNI.find(val => val.value == item).name} <br/> </span>
                            }
                            else if (chooseJersey == "sepeda") {
                                return <span>{cuttingSepeda.find(val => val.value == item).name} <br/> </span>
                            }
                            else {
                                return <span>{cuttingLainnya.find(val => val.value == item).name} <br/> </span>
                            }
                        })}</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Jenis Pola: {polas.find(val => val.value == choosePola).name}</p>
                        {chooseJersey == "sepeda" && <p class="mb-2 font-semibold mr-2 text-left flex-auto">Jenis Zipper: {zippers.find(val => val.value == chooseZipper).name}</p>}
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Ketersediaan Design: {isDesignReady.find(val => val.value == chooseIsDesignReady).name}</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Keterangan Design: {description}</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Type Kerah: {typeKerah.find(val => val.value == chooseTypeKerah).name}</p>
                        <p class="mb-2 font-semibold mr-2 text-left flex-auto">Motif: {motives.find(val => val.value == chooseMotive).name}</p>
                        <br/>
                        {
                            needExtra == "yes" && 
                            <div class="font-semibold mr-2 text-left flex-auto">
                                <p className="text-center mb-2">Detail Tambahan</p>
                                <br/>
                                {
                                    chooseQuality != "basic" && <p class="font-semibold mr-2 mb-2 text-left flex-auto">Jenis Tulisan Bisban: {jenisTulsanBisban.find(val => val.value == chooseJenisTulisanBisban)?.name}</p>
                                }
                                {
                                    chooseQuality != "basic" && chooseJenisTulisanBisban == jenisTulsanBisban[2].value &&
                                    <p class="font-semibold mr-2 text-left mb-2 flex-auto">Jenis Tulisan Bisban: {imageTulisanBisban}</p>
                                }
                                {
                                    chooseQuality != "basic" &&  <p class="font-semibold mb-2 mr-2 text-left flex-auto">Design Inner: {designInners.find(val => val.value == chooseDesignInner)?.name}</p>
                                }
                                {
                                    chooseQuality != "basic"
                                    && chooseDesignInner == designInners[designInners.length - 1].value &&
                                    <p class="font-semibold mr-2 mb-2 text-left flex-auto">Image Design inner: {imageDesignInner}</p>
                                }
                                {chooseQuality != "basic" &&  <p class="font-semibold mr-2 mb-2 text-left flex-auto">Jenis Kerah: {typeKerah.find(val => val.value == chooseKerah)?.name}</p>}
                                
                                {
                                    chooseQuality == "basic" && 
                                    <p class="font-semibold mr-2 mb-2 text-left flex-auto">Jenis Tulisan Bisban: {jenisTulsanBisban.find(val => val.value == chooseDesignInnerKerah)?.name}</p>
                                }
                                {
                                    chooseQuality != "basic"
                                    && chooseDesignInnerKerah == designInnerKerah[designInnerKerah.length - 1].value &&
                                    <p class="font-semibold mr-2 mb-2 text-left flex-auto">Image Inner Kerah: {imageDesignInnerKerah}</p>
                                }
                                {
                                   <p class="font-semibold mr-2 text-left mb-2 flex-auto">Authentic Label: {authenticLabel.find(val => val.value == chooseAuthenticLabel)?.name}</p>
                                }
                                {
                                    chooseAuthenticLabel == authenticLabel[authenticLabel.length - 1].value &&
                                    <p class="font-semibold mr-2 text-left mb-2 flex-auto">Image authentic label : {imageAuthenticLabel}</p>
                                }
                                {
                                    chooseQuality == "premium" &&
                                    <p class="font-semibold mr-2 mb-2 text-left flex-auto">Care Label: {careLabels.find(val => val.value == chooseCareLabel)?.name}</p>
                                }
                                {
                                    chooseQuality == "premium" && chooseCareLabel == careLabels[careLabels.length - 1].value && 
                                    <p class="font-semibold mb-2 mr-2 text-left flex-auto">Image Care Label : {imageCareLabel}</p>
                                }
                                {
                                    chooseQuality == "premium" && 
                                    <p class="font-semibold mb-2 mr-2 text-left flex-auto">Bisban Bawah: {bisbanBawah.find(val => val.value == chooseBisbanBawah)?.name}</p> 
                                }
                                {
                                    chooseQuality == "premium" && chooseBisbanBawah == bisbanBawah[bisbanBawah.length - 1].value && 
                                    <p class="font-semibold mb-2 mr-2 text-left flex-auto">Image Bisban Bawah : {imageBisbanBawah}</p>
                                }
                            </div>
                        }
                        {
                            sum > 0 &&
                            <div className="col-span-10 pl-4">
                                <p>{sum < 20 ?
                                    " Estimasi Selesai : 5 hari kerja " :
                                    sum < 50 ? " Estimasi Selesai : 7 hari kerja " :
                                        sum < 100 ? " Estimasi Selesai : 14 hari kerja " :
                                            "Order kamu sedang kami proses, admin terkait akan menghubungi kamu jika ada detail yang perlu di konfirmasi. terima kasih"}
                                    <br />
                                    {
                                        chooseIsDesignReady != isDesignReady[0] && <span>*Setting + 1 hari<br /></span>
                                    }
                                    *Design + 3 hari
                                    <br />
                                    <span>Total Pembayaran = {getRupiah({ number: sum })} x {getRupiah({ number: pricePerPcs })} harga per pcs {feeDesign > 0 && <span> + {getRupiah({ number: feeDesign })} (harga design)</span>} =
                                        <strong style={{ color: 'red' }}>Rp {getRupiah({ number: (sum * pricePerPcs) + feeDesign })}</strong></span>
                                </p>
                            </div>
                        }
                        <p onClick={() => setOpenPesanan(false)} class="cursor-pointer flex self-center rounded-full bg-yellow-500 uppercase px-4 text-xl font-bold text-black py-2 my-2">Pesan Sekarang</p>
                        
                    </div>
                </div>
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
                                    <label>Jenis potongan</label>
                                    <FormGroup>
                                        {
                                            chooseJersey == "futsal" ?
                                                cuttingFutsal.map((item, index) => {
                                                    return <FormControlLabel key={item.name + "cutting-fursal"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                                        return <FormControlLabel key={item.name + "cutting-basket"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                                            return <FormControlLabel key={item.name + "cutting-gaming"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                                                return <FormControlLabel key={item.name + "cutting-running"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                                                    return <FormControlLabel key={item.name + "cutting-tni"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                                                        return <FormControlLabel key={item.name + "cutting-sepeda"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                                                        return <FormControlLabel key={item.name + "cutting-lainnya"} control={<Checkbox value={item.value} onChange={(val) => {
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
                                    <FormLabel id="demo-controlled-radio-buttons-group">Jenis Pola</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group-jenis-pola"
                                        value={choosePola}
                                        onChange={(val) => setChoosePola(val.target.value)}
                                    >
                                        {
                                            polas.map((item) => {
                                                return <FormControlLabel key={item.name + "pilih-jenis-pola"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                    {item.name}
                                                    {
                                                        <img src={`/src/images/jenis_pola/${item.value}.${item.type_image}`} className=" ml-5 w-24 h-auto" />
                                                    }
                                                </div>} />
                                            })
                                        }
                                    </RadioGroup>
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
                                        key={"16"}
                                        inputProps={{
                                            name: 'typeKerah',
                                            id: 'typeKerah',
                                        }}
                                        value={chooseTypeKerah}
                                        onChange={(val) => {
                                            setChooseTypeKerah(val.target.value);
                                            setChooseKerah("");
                                        }}
                                    >
                                        {
                                            typeKerah.map((item) => {
                                                if (chooseQuality == "basic" && (item.value == "lainnya-1" || item.value == "lainnya-2" || item.value == "lainnya-gratis")) {

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
                                    <FormLabel id="demo-controlled-radio-buttons-group">
                                        {
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
                                            chooseTypeKerah == typeKerah[1].value && chooseQuality != "basic" ?
                                                lainnyaKerah1.map((item) => {
                                                    return <FormControlLabel key={item.name + "pilih-lainnya-kerah-1"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                        {item.name}
                                                        {
                                                            // item.value !== authenticLabel[authenticLabel.length-1].value ?
                                                            <img src={`/src/images/kerah/lainnya/1/${item.value}.${item.type}`} className=" ml-5 w-52 h-auto" />
                                                        }
                                                    </div>} />

                                                }) : chooseTypeKerah == typeKerah[2].value && chooseQuality != "basic" ?
                                                    lainnyaKerah2.map((item) => {
                                                        return <FormControlLabel key={item.name + "pilih-lainnya-kerah-2"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                            {item.name}
                                                            {
                                                                // item.value !== authenticLabel[authenticLabel.length-1].value ?
                                                                <img src={`/src/images/kerah/lainnya/2/${item.value}.${item.type}`} className=" ml-5 w-52 h-auto" />
                                                            }
                                                        </div>} />

                                                    }) : chooseTypeKerah == typeKerah[3].value && chooseQuality != "basic" ?
                                                        lainnyaKerahFree.map((item) => {
                                                            return <FormControlLabel key={item.name + "pilih-lainnya-kerah-free"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                                {item.name}
                                                                {
                                                                    // item.value !== authenticLabel[authenticLabel.length-1].value ?
                                                                    <img src={`/src/images/kerah/lainnya/gratis/${item.value}.${item.type}`} className=" ml-5 w-52 h-auto" />
                                                                }
                                                            </div>} />

                                                        }) :
                                                        standarKerah.map((item) => {

                                                            return <FormControlLabel key={item.name + "pilih-standar-kerah"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                                {item.name}
                                                                {
                                                                    // item.value !== authenticLabel[authenticLabel.length-1].value ?
                                                                    <img src={`/src/images/kerah/standard/${item.value}.${item.type_image}`} className=" ml-5 w-52 h-auto" />
                                                                }
                                                            </div>} />

                                                        })
                                        }

                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        {
                            chooseQuality != "basic" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <FormLabel id="demo-controlled-radio-buttons-group">Pilih Motif kain</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group-jenis-pola"
                                            value={chooseMotive}
                                            onChange={(val) => setChooseMotive(val.target.value)}
                                        >
                                            {
                                                motives.map((item) => {
                                                    if (item.value == "milano-uv" || item.value == "benzema-uv") {
                                                        if (chooseQuality == "premium") {
                                                            return <FormControlLabel key={item.name + "pilih-motif-kain"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                                {item.name}
                                                                {
                                                                    item.type_image &&
                                                                    <img src={`/src/images/motif_kain/${item.value}.${item.type_image}`} className=" ml-5 w-52 h-auto" />
                                                                }
                                                            </div>} />
                                                        } else {
                                                            return ""
                                                        }
                                                    } else {
                                                        return <FormControlLabel key={item.name + "pilih-motif-kain"} value={item.value} control={<Radio />} label={<div className="flex items-center mt-2">
                                                            {item.name}
                                                            {
                                                                item.type_image &&
                                                                <img src={`/src/images/motif_kain/${item.value}.${item.type_image}`} className=" ml-5 w-52 h-auto" />
                                                            }
                                                        </div>} />
                                                    }

                                                })
                                            }
                                        </RadioGroup>
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
                                        <FormLabel id="demo-controlled-radio-buttons-group">Jenis Tulisan Bisban</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={chooseJenisTulisanBisban}
                                            onChange={(val) => setChooseJenisTulisanBisban(val.target.value)}
                                        >
                                            {
                                                jenisTulsanBisban.map((item) => {
                                                    return <FormControlLabel key={item.name + "pilih-design-inner"} value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.type_image &&
                                                                item.value !== designInners[designInners.length - 1].value ?
                                                                <img src={`/src/images/detail_tambahan/bisban/${item.value}.${item.type_image}`} className=" ml-5 object-cover w-56 mt-4 h-10" /> : ""
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
                                            aria-labelledby="demo-controlled-radio-buttons-group-pilih-design-inner"
                                            name="controlled-radio-buttons-group"
                                            value={chooseDesignInner}
                                            onChange={(val) => {
                                                setChooseDesignInner(val.target.value)
                                            }}
                                        >
                                            {
                                                designInners.map((item) => {
                                                    return <FormControlLabel key={item.name + "pilih-design-inner"} value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== designInners[designInners.length - 1].value ?
                                                                <img src={`/src/images/detail_tambahan/inner-label/${item.value}.${item.type_image}`} className=" ml-5 w-52 mt-4 h-auto" /> : ""
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
                            && chooseDesignInner == designInners[designInners.length - 1].value &&
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
                            needExtra == "yes" && chooseQuality == "basic" &&
                            <div className="col-span-10 pl-4">
                                <div className="w-full pt-6">
                                    <FormControl fullWidth className="w-full pt-10">
                                        <FormLabel id="demo-controlled-radio-buttons-group-pilihan-design-inner"> Pilihan Design Inner Kerah</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group-pilih-design-inner-kerah"
                                            name="controlled-radio-buttons-group"
                                            value={chooseDesignInnerKerah}
                                            onChange={(val) => {
                                                setChooseDesignInnerKerah(val.target.value)
                                            }}
                                        >
                                            {
                                                designInnerKerah.map((item) => {
                                                    return <FormControlLabel key={item.name + "pilih-design-inner"} value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== designInnerKerah[designInnerKerah.length - 1].value ?
                                                                <img src={`/src/images/detail_tambahan/inner-kerah/${item.value}.${item.type_image}`} className=" ml-5 w-52 mt-4 h-auto" /> : ""
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
                            && chooseDesignInnerKerah == designInnerKerah[designInnerKerah.length - 1].value &&
                            <div className="col-span-10 pl-4">
                                {/* <Button variant="contained"
                                component="Upload File"> */}
                                {
                                    // <img id="iframe-target" className="w-56 h-auto" />

                                }
                                <p className="text-sm mb-2">
                                    Upload Design Inner Kerah
                                </p>
                                <input
                                    type="file"
                                    aria-label="Upload Design Inner (Sablon DTF)"
                                    onChange={(val) => {
                                        // var blobObj = new Blob(val.target.files[0], { type: "application/pdf" });
                                        // var url = window.URL.createObjectURL(blobObj);
                                        // document.getElementById("iframe-target").setAttribute("src", url);
                                        setImageDesignInnerKerah(val.target.files[0]);
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
                                                    return <FormControlLabel key={item.name + "pilih-authentic-label"} value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== authenticLabel[authenticLabel.length - 1].value ?
                                                                <img src={`/src/images/detail_tambahan/authentic_label/${item.value}.${item.type_image}`} className=" ml-5 w-52 h-auto" /> : ""
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
                            && chooseAuthenticLabel == authenticLabel[authenticLabel.length - 1].value &&
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
                                                    return <FormControlLabel key={item.name + "pilih-care-label"} value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== careLabels[careLabels.length - 1].value ?
                                                                <img src={`/src/images/detail_tambahan/care-label/${item.value}.${item.type_image}`} className=" ml-5 w-24 h-auto" /> : ""
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
                            chooseQuality == "premium" && chooseCareLabel == careLabels[careLabels.length - 1].value &&
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
                                                    return <FormControlLabel key={item.name + "pilih-bisban-bawah"} value={item.value} control={<Radio />} label={<div className="flex items-center">
                                                        {item.name}
                                                        {
                                                            item.value !== bisbanBawah[bisbanBawah.length - 1].value && item.type_image ?
                                                                <img src={`/src/images/detail_tambahan/bisban/${item.value}.${item.type_image}`} className=" ml-5 w-56 h-8 object-cover" /> : ""
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
                            chooseQuality == "premium" && chooseBisbanBawah == bisbanBawah[bisbanBawah.length - 1].value &&
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
                        <div className="col-span-10 px-5 mt-4">
                            <TextField id="sum-pcs" type={"number"} label="Jumlah per-pcs (Dewasa)" variant="standard" className="w-full"
                                value={sumPcsDewasa}
                                onChange={(val) => {
                                    setSumPcsDewasa(val.target.value)
                                }} />
                        </div>
                        {/* <div className="lg:col-span-5 col-span-10 px-5 mt-4">
                            <TextField id="sum-pcs" type={"number"} label="Jumlah per-pcs (Anak-anak)" variant="standard" className="w-full"
                                value={sumPcsChild}
                                onChange={(val) => {
                                    setSumPcsChild(val.target.value)
                                }} />
                        </div> */}
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
                            sum > 0 &&
                            <div className="col-span-10 pl-4">
                                <button className=" bg-yellow-500 rounded-xl py-2 px-10 text-black shadow-xl font-semibold text-xl hover:scale-105" onClick={() => {
                                    setOpenPesanan(true);
                                    console.log("ASDSADSAD")
                                    // alert("Terima kasih atas pemesanannya :) \nPesananmu sudah sampai pada admin kami.")
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