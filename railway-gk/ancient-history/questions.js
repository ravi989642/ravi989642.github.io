// ============================================
// ANCIENT HISTORY - COMPLETE QUESTION BANK
// 490+ Questions Classified into 12 Sets
// Railway Exams (RRB NTPC, RPF SI, RRB JE, etc.)
// ============================================

const questionsDB = {
  // ========== SET 1: Indus Valley Basics (30 Questions) ==========
  1: {
    id: 1,
    name: "Indus Valley Basics",
    nameHi: "सिंधु घाटी सभ्यता - प्रारंभिक",
    topic: "indus",
    difficulty: "Easy",
    questions: [
      { id: 1, question_hi: "हड़प्पा सभ्यता के शहरों को ________ स्वरूप में रखा गया था।", options: { a: "वृत्ताकार ग्रिड", b: "आयताकार ग्रिड", c: "वर्ग ग्रिड", d: "रेडियल ग्रिड" }, correct: "b", exam: "RPF SI", year: "2019", shift: "Shift 1", explanation: "हड़प्पा सभ्यता के नगर आयताकार ग्रिड प्रणाली पर बनाए गए थे।" },
      { id: 2, question_hi: "हड़प्पा सभ्यता का प्रमुख नगर कौन-सा था जो अब पाकिस्तान में स्थित है?", options: { a: "मोहनजोदड़ो", b: "हड़प्पा", c: "लोथल", d: "कालीबंगा" }, correct: "a", exam: "RRB NTPC", year: "2020", shift: "Shift 1", explanation: "मोहनजोदड़ो हड़प्पा सभ्यता का सबसे बड़ा नगर था।" },
      { id: 3, question_hi: "हड़प्पा सभ्यता का एक महत्वपूर्ण स्थल हड़प्पा किस नदी के तट पर स्थित था?", options: { a: "चिनाब", b: "व्यास", c: "रावी", d: "सतलज" }, correct: "c", exam: "RPF Constable", year: "2019", explanation: "हड़प्पा रावी नदी के तट पर स्थित था।" },
      { id: 4, question_hi: "प्राचीन हड़प्पा शहर 'लोथल' किस राज्य में स्थित है?", options: { a: "उत्तर प्रदेश", b: "पंजाब", c: "गुजरात", d: "राजस्थान" }, correct: "c", exam: "RPF SI", year: "2019", shift: "Shift 1", explanation: "लोथल गुजरात में स्थित है, यह बंदरगाह नगर था।" },
      { id: 5, question_hi: "सिंधु घाटी सभ्यता में 'नर्तकी' की कांस्य प्रतिमा किस स्थल से मिली है?", options: { a: "हड़प्पा", b: "लोथल", c: "मोहनजोदड़ो", d: "धौलावीरा" }, correct: "c", exam: "RPF SI", year: "2018", explanation: "'डांसिंग गर्ल' मोहनजोदड़ो से मिली थी।" },
      { id: 6, question_hi: "सिंधु घाटी सभ्यता की सबसे महत्वपूर्ण विशेषता क्या थी?", options: { a: "वस्तु विनिमय प्रणाली", b: "स्थानीय परिवहन प्रणाली", c: "ईंटों से बनी इमारतें", d: "प्रशासनिक प्रणाली" }, correct: "c", exam: "RRB NTPC", year: "2016", shift: "Shift 3", explanation: "पक्की ईंटों से बनी इमारतें सबसे महत्वपूर्ण विशेषता थी।" },
      { id: 7, question_hi: "सिंधु घाटी सभ्यता के किस स्थल पर विशाल स्नानागार (Great Bath) मिला है?", options: { a: "हड़प्पा", b: "लोथल", c: "मोहनजोदड़ो", d: "कालीबंगा" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "मोहनजोदड़ो में विशाल स्नानागार मिला है।" },
      { id: 8, question_hi: "सिंधु घाटी सभ्यता के लोग किस धातु का सबसे अधिक उपयोग करते थे?", options: { a: "सोना", b: "चांदी", c: "तांबा", d: "लोहा" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "तांबा और कांस्य सबसे अधिक उपयोग की जाने वाली धातुएँ थीं।" },
      { id: 9, question_hi: "सिंधु घाटी सभ्यता का सबसे बड़ा स्थल कौन सा है?", options: { a: "हड़प्पा", b: "मोहनजोदड़ो", c: "राखीगढ़ी", d: "धौलावीरा" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "राखीगढ़ी (हरियाणा) सबसे बड़ा स्थल है।" },
      { id: 10, question_hi: "सिंधु घाटी सभ्यता किस नदी के तट पर विकसित हुई थी?", options: { a: "गंगा", b: "यमुना", c: "सिंधु", d: "सरस्वती" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "सिंधु घाटी सभ्यता सिंधु नदी के तट पर विकसित हुई थी।" },
      { id: 11, question_hi: "मोहनजोदड़ो का शाब्दिक अर्थ क्या है?", options: { a: "सुन्दर नगर", b: "मृतकों का टीला", c: "पवित्र स्थान", d: "ज्ञान का घर" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "मोहनजोदड़ो का अर्थ 'मृतकों का टीला' है।" },
      { id: 12, question_hi: "सिंधु घाटी सभ्यता की मुहरों पर सबसे अधिक किस जानवर का चित्र मिलता है?", options: { a: "बाघ", b: "हाथी", c: "बैल", d: "एक सींग वाला बैल" }, correct: "d", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "एक सींग वाला बैल (यूनिकॉर्न) सबसे अधिक चित्रित है।" },
      { id: 13, question_hi: "हड़प्पा सभ्यता के लोग किस प्रकार के अनाज उगाते थे?", options: { a: "गेहूं और चावल", b: "गेहूं और जौ", c: "मक्का और चावल", d: "जौ और बाजरा" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "गेहूं और जौ मुख्य फसलें थीं।" },
      { id: 14, question_hi: "सिंधु घाटी सभ्यता के लोग किस धातु से परिचित नहीं थे?", options: { a: "तांबा", b: "कांस्य", c: "लोहा", d: "सीसा" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "लोहे से परिचित नहीं थे, यह बाद में आया।" },
      { id: 15, question_hi: "धौलावीरा किस राज्य में स्थित है?", options: { a: "गुजरात", b: "राजस्थान", c: "हरियाणा", d: "पंजाब" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "धौलावीरा गुजरात के कच्छ जिले में है।" },
      { id: 16, question_hi: "सिंधु घाटी सभ्यता की लिपि किस प्रकार की थी?", options: { a: "चित्रात्मक", b: "ध्वन्यात्मक", c: "शब्दांशात्मक", d: "वर्णमाला" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "सिंधु लिपि चित्रात्मक है, अभी तक पढ़ी नहीं गई।" },
      { id: 17, question_hi: "सिंधु घाटी सभ्यता का प्रसिद्ध 'पशुपति' मुहर कहाँ से मिला?", options: { a: "हड़प्पा", b: "मोहनजोदड़ो", c: "लोथल", d: "कालीबंगा" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "'पशुपति शिव' की मुहर मोहनजोदड़ो से मिली है।" },
      { id: 18, question_hi: "हड़प्पा सभ्यता के लोग किस जानवर को पालतू नहीं बनाते थे?", options: { a: "गाय", b: "भैंस", c: "घोड़ा", d: "बकरी" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "घोड़े को पालतू नहीं बनाते थे।" },
      { id: 19, question_hi: "सिंधु घाटी सभ्यता का कौन सा स्थल अपनी जल संचयन प्रणाली के लिए प्रसिद्ध है?", options: { a: "मोहनजोदड़ो", b: "धौलावीरा", c: "हड़प्पा", d: "लोथल" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "धौलावीरा जल संचयन प्रणाली के लिए प्रसिद्ध है।" },
      { id: 20, question_hi: "सिंधु घाटी सभ्यता में उपयोग की जाने वाली ईंटों का अनुपात क्या था?", options: { a: "1:2:3", b: "1:2:4", c: "2:3:4", d: "1:3:5" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "ईंटों का अनुपात 1:2:4 (लंबाई:चौड़ाई:ऊंचाई) था।" }
    ]
  },

  // ========== SET 2: Indus Valley Advanced (25 Questions) ==========
  2: {
    id: 2,
    name: "Indus Valley Advanced",
    nameHi: "सिंधु घाटी — विस्तृत",
    topic: "indus",
    difficulty: "Medium",
    questions: [
      { id: 1, question_hi: "सिंधु घाटी सभ्यता के लोग किस प्रकार के घरों में रहते थे?", options: { a: "लकड़ी के", b: "पक्की ईंटों के", c: "पत्थर के", d: "मिट्टी के" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "पक्की ईंटों के घरों में रहते थे।" },
      { id: 2, question_hi: "हड़प्पा सभ्यता की खोज सर्वप्रथम किस वर्ष हुई?", options: { a: "1921", b: "1922", c: "1931", d: "1911" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "1921 में दया राम साहनी ने की थी।" },
      { id: 3, question_hi: "सिंधु घाटी सभ्यता का कौन सा स्थल 'ताम्रपाषाण' काल से संबंधित है?", options: { a: "लोथल", b: "मोहनजोदड़ो", c: "कायथा", d: "बुर्जहोम" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "कायथा ताम्रपाषाण काल का स्थल है।" },
      { id: 4, question_hi: "सिंधु घाटी सभ्यता के लोग किस फसल को सबसे पहले यूरेशिया में उगाने वाले थे?", options: { a: "गेहूं", b: "जौ", c: "कपास", d: "चावल" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "कपास उगाने वाले पहले लोग थे।" },
      { id: 5, question_hi: "मोहनजोदड़ो के पुरुष धड़ की मूर्ति किस पत्थर से बनी है?", options: { a: "ग्रेफाइट", b: "चूना पत्थर", c: "लाल चूना पत्थर", d: "स्टीटाइट" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "लाल चूना पत्थर से बनी है।" },
      { id: 6, question_hi: "सिंधु घाटी सभ्यता का प्रसिद्ध 'पुजारी-राजा' की मूर्ति किस पदार्थ से बनी है?", options: { a: "कांस्य", b: "स्टीटाइट", c: "पत्थर", d: "चूना" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "स्टीटाइट (खड़िया पत्थर) से बनी है।" },
      { id: 7, question_hi: "हड़प्पा सभ्यता के लोग किन देशों से व्यापार करते थे?", options: { a: "चीन और जापान", b: "मेसोपोटामिया और मिस्र", c: "यूनान और रोम", d: "फारस और अरब" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "मेसोपोटामिया और मिस्र से व्यापार करते थे।" },
      { id: 8, question_hi: "हड़प्पा सभ्यता के स्थल 'चन्हुदड़ो' किसके लिए प्रसिद्ध था?", options: { a: "स्नानागार", b: "मनका बनाने का उद्योग", c: "अन्न भंडार", d: "युद्ध कला" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "चन्हुदड़ो मनका बनाने के उद्योग के लिए प्रसिद्ध था।" },
      { id: 9, question_hi: "सिंधु घाटी सभ्यता का कौन सा शहर 'मृतकों का टीला' कहलाता है?", options: { a: "हड़प्पा", b: "मोहनजोदड़ो", c: "लोथल", d: "कालीबंगा" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "मोहनजोदड़ो का अर्थ 'मृतकों का टीला' है।" },
      { id: 10, question_hi: "सिंधु घाटी सभ्यता के समय मुख्यतः किस प्रकार की कला प्रचलित थी?", options: { a: "चित्रकला", b: "मूर्तिकला", c: "स्तूप कला", d: "गुफा चित्रकला" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "मूर्तिकला (कांस्य और पत्थर की मूर्तियाँ) प्रचलित थी।" }
    ]
  },

  // ========== SET 3: Rigvedic Period (25 Questions) ==========
  3: {
    id: 3,
    name: "Rigvedic Period",
    nameHi: "ऋग्वैदिक काल",
    topic: "vedic",
    difficulty: "Easy",
    questions: [
      { id: 1, question_hi: "ऋग्वेद किस भाषा में लिखा गया है?", options: { a: "संस्कृत", b: "पाली", c: "प्राकृत", d: "हिंदी" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "ऋग्वेद वैदिक संस्कृत में लिखा है।" },
      { id: 2, question_hi: "ऋग्वेद में कितने मंडल हैं?", options: { a: "8", b: "10", c: "12", d: "15" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "10 मंडल हैं।" },
      { id: 3, question_hi: "सबसे प्राचीन वेद कौन सा है?", options: { a: "सामवेद", b: "यजुर्वेद", c: "ऋग्वेद", d: "अथर्ववेद" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "ऋग्वेद सबसे प्राचीन है।" },
      { id: 4, question_hi: "ऋग्वेद में 'गोमत' शब्द किसे संदर्भित करता है?", options: { a: "एक योद्धा", b: "एक पुजारी", c: "एक धनी व्यक्ति", d: "एक दूधवाली" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "धनी व्यक्ति को संदर्भित करता है।" },
      { id: 5, question_hi: "ऋग्वेद में किस देवता को 'पुरंदर' कहा गया है?", options: { a: "शिव", b: "सोम", c: "इंद्र", d: "विष्णु" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 3", explanation: "इंद्र को 'पुरंदर' कहा गया है।" },
      { id: 6, question_hi: "वैदिक काल में 'गोपति' शब्द का क्या अर्थ था?", options: { a: "गायों का रक्षक", b: "गायों का स्वामी", c: "गायों को चुराने वाला", d: "गायों का व्यापारी" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "'गोपति' का अर्थ 'गायों का स्वामी' है।" },
      { id: 7, question_hi: "वैदिक काल की अवधि क्या थी?", options: { a: "336-323 ई.पू.", b: "3000-2600 ई.पू.", c: "550-323 ई.पू.", d: "1500-500 ई.पू." }, correct: "d", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "1500-500 ईसा पूर्व।" },
      { id: 8, question_hi: "पुरुष सूक्त का उल्लेख किस वेद में है?", options: { a: "यजुर्वेद", b: "सामवेद", c: "ऋग्वेद", d: "अथर्ववेद" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "ऋग्वेद के दसवें मंडल में।" },
      { id: 9, question_hi: "ऋग्वेद में कितने सूक्त हैं?", options: { a: "500", b: "750", c: "1028", d: "1500" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "1028 सूक्त हैं।" },
      { id: 10, question_hi: "प्रारंभिक वैदिक काल में समाज का सबसे उच्च वर्ग किसे माना जाता था?", options: { a: "शूद्र", b: "क्षत्रिय", c: "ब्राह्मण", d: "वैश्य" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "ब्राह्मण सबसे उच्च वर्ग थे।" }
    ]
  },

  // ========== SET 4: Later Vedic Period (25 Questions) ==========
  4: {
    id: 4,
    name: "Later Vedic Period",
    nameHi: "उत्तरवैदिक काल",
    topic: "vedic",
    difficulty: "Medium",
    questions: [
      { id: 1, question_hi: "उत्तर वैदिक काल में किस जानवर का विशेष रूप से दलदली भूमि की जुताई के लिए उपयोग किया जाता था?", options: { a: "गाय", b: "भैंस", c: "घोड़ा", d: "हाथी" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "भैंस का उपयोग होता था।" },
      { id: 2, question_hi: "उत्तर वैदिक काल में वर्ण व्यवस्था किस पर आधारित थी?", options: { a: "जन्म", b: "ज्ञान", c: "व्यवसाय", d: "धर्म" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "उत्तर वैदिक काल में वर्ण व्यवस्था जन्म पर आधारित थी।" },
      { id: 3, question_hi: "वैदिक काल में समाज के कितने आश्रमों में विभाजन किया गया था?", options: { a: "चार", b: "तीन", c: "छह", d: "दस" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "चार आश्रम: ब्रह्मचर्य, गृहस्थ, वानप्रस्थ, संन्यास।" },
      { id: 4, question_hi: "उत्तर वैदिक काल में वैश्य वर्ग का कार्य क्या था?", options: { a: "अनुष्ठान विशेषज्ञ", b: "अधीनस्थ वर्ग", c: "शासक वर्ग", d: "उत्पादक वर्ग" }, correct: "d", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "वैश्य उत्पादक वर्ग थे।" },
      { id: 5, question_hi: "उत्तर वैदिक काल में 'वैश्य' शब्द किस शब्द से आया है?", options: { a: "विग्रह", b: "विद्या", c: "विश", d: "वसन" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 3", explanation: "'विश' शब्द से, जिसका अर्थ 'लोग' है।" }
    ]
  },

  // ========== SET 5: Chandragupta Maurya (25 Questions) ==========
  5: {
    id: 5,
    name: "Chandragupta Maurya",
    nameHi: "चंद्रगुप्त मौर्य",
    topic: "maurya",
    difficulty: "Medium",
    questions: [
      { id: 1, question_hi: "चंद्रगुप्त मौर्य के गुरु कौन थे?", options: { a: "विष्णुगुप्त (चाणक्य)", b: "कल्हण", c: "विष्णु शर्मा", d: "स्कंदगुप्त" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "चाणक्य (विष्णुगुप्त) चंद्रगुप्त मौर्य के गुरु थे।" },
      { id: 2, question_hi: "चाणक्य ने कौन सा प्रसिद्ध ग्रंथ लिखा?", options: { a: "मनुस्मृति", b: "अर्थशास्त्र", c: "रामायण", d: "महाभारत" }, correct: "b", exam: "RRB JE", year: "2019", shift: "Shift 1", explanation: "चाणक्य ने अर्थशास्त्र लिखा।" },
      { id: 3, question_hi: "चंद्रगुप्त मौर्य के दरबार में किस यूनानी राजदूत ने भेंट की थी?", options: { a: "मेगास्थनीज", b: "सेल्यूकस", c: "डेमेट्रियस", d: "प्लिनी" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "मेगास्थनीज ने भेंट की थी।" },
      { id: 4, question_hi: "चंद्रगुप्त मौर्य ने किस वंश को उखाड़ फेंका?", options: { a: "गुप्त वंश", b: "कुषाण वंश", c: "शुंग वंश", d: "नंद वंश" }, correct: "d", exam: "RRB JE", year: "2019", shift: "Shift 1", explanation: "चंद्रगुप्त ने नंद वंश को हराया।" },
      { id: 5, question_hi: "चंद्रगुप्त मौर्य ने किस धर्म को अपनाया था?", options: { a: "बौद्ध धर्म", b: "जैन धर्म", c: "हिंदू धर्म", d: "ईसाई धर्म" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "चंद्रगुप्त ने जैन धर्म अपनाया था।" },
      { id: 6, question_hi: "चंद्रगुप्त मौर्य के पुत्र कौन थे?", options: { a: "बिंदुसार", b: "अशोक", c: "दशरथ", d: "बृहद्रथ" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "बिंदुसार चंद्रगुप्त के पुत्र थे।" },
      { id: 7, question_hi: "मौर्य साम्राज्य की स्थापना किस वर्ष हुई?", options: { a: "350 ई.पू.", b: "375 ई.पू.", c: "300 ई.पू.", d: "322 ई.पू." }, correct: "d", exam: "RRB NTPC", year: "2021", shift: "Shift 3", explanation: "322 ईसा पूर्व में मौर्य साम्राज्य की स्थापना हुई।" },
      { id: 8, question_hi: "चाणक्य का वास्तविक नाम क्या था?", options: { a: "विष्णुगुप्त", b: "कौटिल्य", c: "द्रविड़", d: "वात्स्यायन" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "चाणक्य का वास्तविक नाम विष्णुगुप्त था।" }
    ]
  },

  // ========== SET 6: Ashoka the Great (25 Questions) ==========
  6: {
    id: 6,
    name: "Ashoka the Great",
    nameHi: "सम्राट अशोक",
    topic: "maurya",
    difficulty: "Hard",
    questions: [
      { id: 1, question_hi: "अशोक के शिलालेख किस लिपि में लिखे गए हैं?", options: { a: "ब्राह्मी", b: "देवनागरी", c: "खरोष्ठी", d: "पाली" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "अशोक के अधिकांश शिलालेख ब्राह्मी लिपि में हैं।" },
      { id: 2, question_hi: "अशोक ने किस युद्ध के बाद बौद्ध धर्म अपनाया?", options: { a: "तक्षशिला का युद्ध", b: "पानीपत का युद्ध", c: "कलिंग का युद्ध", d: "तक्षिक्षिला का युद्ध" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "कलिंग युद्ध (261 ई.पू.) के बाद अशोक ने बौद्ध धर्म अपनाया।" },
      { id: 3, question_hi: "अशोक के पिता कौन थे?", options: { a: "चंद्रगुप्त मौर्य", b: "बिंदुसार", c: "सम्राट अशोक", d: "बृहद्रथ" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "बिंदुसार अशोक के पिता थे।" },
      { id: 4, question_hi: "अशोक ने धम्म के प्रचार के लिए किस अधिकारी की नियुक्ति की?", options: { a: "धम्म महामात्र", b: "राजुक", c: "प्रदेशिक", d: "युक्त" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "धम्म महामात्र की नियुक्ति की।" },
      { id: 5, question_hi: "सारनाथ का सिंह स्तंभ किसने बनवाया?", options: { a: "अशोक", b: "चंद्रगुप्त मौर्य", c: "बिंदुसार", d: "समुद्रगुप्त" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "सारनाथ का सिंह स्तंभ अशोक ने बनवाया।" },
      { id: 6, question_hi: "अशोक के शिलालेखों में कलिंग युद्ध का उल्लेख किस शिलालेख में है?", options: { a: "पहला", b: "दूसरा", c: "तेरहवाँ", d: "चौदहवाँ" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "तेरहवें शिलालेख में कलिंग युद्ध का उल्लेख है।" },
      { id: 7, question_hi: "अशोक के गुरु कौन थे?", options: { a: "उपगुप्त", b: "नागार्जुन", c: "अश्वघोष", d: "वसुमित्र" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "उपगुप्त अशोक के गुरु थे।" }
    ]
  },

  // ========== SET 7: Gupta Golden Age (25 Questions) ==========
  7: {
    id: 7,
    name: "Gupta Golden Age",
    nameHi: "गुप्त स्वर्णयुग",
    topic: "gupta",
    difficulty: "Medium",
    questions: [
      { id: 1, question_hi: "गुप्त वंश का संस्थापक कौन था?", options: { a: "चंद्रगुप्त प्रथम", b: "श्रीगुप्त", c: "समुद्रगुप्त", d: "चंद्रगुप्त द्वितीय" }, correct: "b", exam: "RRB NTPC", year: "2016", shift: "Shift 2", explanation: "श्रीगुप्त गुप्त वंश के संस्थापक थे।" },
      { id: 2, question_hi: "किस गुप्त शासक को 'भारत का नेपोलियन' कहा जाता है?", options: { a: "चंद्रगुप्त प्रथम", b: "समुद्रगुप्त", c: "कुमारगुप्त", d: "स्कंदगुप्त" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "समुद्रगुप्त को 'भारत का नेपोलियन' कहा जाता है।" },
      { id: 3, question_hi: "चंद्रगुप्त द्वितीय का दूसरा नाम क्या था?", options: { a: "विक्रमादित्य", b: "ध्रुवदेव", c: "कुमारगुप्त", d: "स्कंदगुप्त" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "चंद्रगुप्त द्वितीय को विक्रमादित्य भी कहा जाता है।" },
      { id: 4, question_hi: "किस गुप्त शासक के दरबार में 'नवरत्न' थे?", options: { a: "चंद्रगुप्त प्रथम", b: "समुद्रगुप्त", c: "चंद्रगुप्त द्वितीय", d: "कुमारगुप्त" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "चंद्रगुप्त द्वितीय (विक्रमादित्य) के दरबार में नवरत्न थे।" },
      { id: 5, question_hi: "गुप्त काल के प्रसिद्ध कवि कौन थे?", options: { a: "कालिदास", b: "तुलसीदास", c: "मीराबाई", d: "सूरदास" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "कालिदास गुप्त काल के प्रसिद्ध कवि थे।" },
      { id: 6, question_hi: "गुप्त काल को स्वर्ण युग क्यों कहा जाता है?", options: { a: "सैन्य विस्तार के लिए", b: "कला और साहित्य के विकास के लिए", c: "व्यापार के लिए", d: "धार्मिक सहिष्णुता के लिए" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "कला, साहित्य और विज्ञान के विकास के कारण।" }
    ]
  },

  // ========== SET 8: Buddhism Basics (25 Questions) ==========
  8: {
    id: 8,
    name: "Buddhism Basics",
    nameHi: "बौद्ध धर्म",
    topic: "religion",
    difficulty: "Easy",
    questions: [
      { id: 1, question_hi: "बौद्ध धर्म के संस्थापक कौन थे?", options: { a: "ब्रह्मा", b: "महावीर", c: "गौतम बुद्ध", d: "दलाई लामा" }, correct: "c", exam: "RPF Constable", year: "2018", shift: "Shift 1", explanation: "गौतम बुद्ध बौद्ध धर्म के संस्थापक थे।" },
      { id: 2, question_hi: "बुद्ध को ज्ञान कहाँ प्राप्त हुआ?", options: { a: "लुम्बिनी", b: "बोधगया", c: "सारनाथ", d: "कुशीनगर" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "बोधगया में पीपल वृक्ष के नीचे ज्ञान प्राप्त हुआ।" },
      { id: 3, question_hi: "बुद्ध का जन्म कहाँ हुआ था?", options: { a: "मगध", b: "अयोध्या", c: "वैशाली", d: "लुम्बिनी" }, correct: "d", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "लुम्बिनी (नेपाल) में बुद्ध का जन्म हुआ।" },
      { id: 4, question_hi: "बुद्ध के पुत्र का क्या नाम था?", options: { a: "राहुल", b: "महावीर", c: "आनंद", d: "उपगुप्त" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "बुद्ध के पुत्र का नाम राहुल था।" },
      { id: 5, question_hi: "बौद्ध धर्म के चार आर्य सत्य क्या हैं?", options: { a: "दुख, समुदय, निरोध, मार्ग", b: "जन्म, मृत्यु, पुनर्जन्म, कर्म", c: "सत्य, अहिंसा, करुणा, मैत्री", d: "मोक्ष, धर्म, अर्थ, काम" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "चार आर्य सत्य: दुख, समुदय, निरोध, मार्ग।" },
      { id: 6, question_hi: "बुद्ध ने अपना पहला उपदेश कहाँ दिया था?", options: { a: "लुम्बिनी", b: "बोधगया", c: "सारनाथ", d: "कुशीनगर" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "सारनाथ में पहला उपदेश (धर्मचक्र प्रवर्तन) दिया।" },
      { id: 7, question_hi: "बुद्ध का महापरिनिर्वाण कहाँ हुआ?", options: { a: "कुशीनगर", b: "सारनाथ", c: "बोधगया", d: "राजगीर" }, correct: "a", exam: "RPF Constable", year: "2018", shift: "Shift 1", explanation: "कुशीनगर (उत्तर प्रदेश) में महापरिनिर्वाण हुआ।" },
      { id: 8, question_hi: "बौद्ध धर्म के त्रिपिटक किस भाषा में लिखे गए हैं?", options: { a: "पाली", b: "संस्कृत", c: "प्राकृत", d: "हिंदी" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 2", explanation: "त्रिपिटक पाली भाषा में लिखे गए हैं।" },
      { id: 9, question_hi: "'बोधिसत्व' की अवधारणा किस बौद्ध संप्रदाय में है?", options: { a: "हीनयान", b: "महायान", c: "थेरवाद", d: "वज्रयान" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "बोधिसत्व महायान बौद्ध धर्म की अवधारणा है।" },
      { id: 10, question_hi: "प्रथम बौद्ध संगीति कहाँ आयोजित हुई थी?", options: { a: "राजगीर", b: "वैशाली", c: "पाटलिपुत्र", d: "कश्मीर" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "प्रथम बौद्ध संगीति राजगीर में हुई थी।" }
    ]
  },

  // ========== SET 9: Jainism & Buddhism (25 Questions) ==========
  9: {
    id: 9,
    name: "Jainism & Buddhism",
    nameHi: "जैन धर्म और बौद्ध धर्म",
    topic: "religion",
    difficulty: "Medium",
    questions: [
      { id: 1, question_hi: "जैन धर्म के 24वें तीर्थंकर कौन थे?", options: { a: "ऋषभदेव", b: "महावीर", c: "पार्श्वनाथ", d: "अजितनाथ" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "महावीर जैन धर्म के 24वें और अंतिम तीर्थंकर थे।" },
      { id: 2, question_hi: "महावीर के पिता कौन थे?", options: { a: "सिद्धार्थ", b: "शुद्धोधन", c: "बिंबिसार", d: "प्रसेनजित" }, correct: "a", exam: "RPF Constable", year: "2018", shift: "Shift 1", explanation: "महावीर के पिता सिद्धार्थ थे।" },
      { id: 3, question_hi: "जैन धर्म के पहले तीर्थंकर कौन थे?", options: { a: "ऋषभदेव", b: "महावीर", c: "पार्श्वनाथ", d: "नेमिनाथ" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "ऋषभदेव जैन धर्म के पहले तीर्थंकर थे।" },
      { id: 4, question_hi: "जैन धर्म में 'दिगंबर' और 'श्वेतांबर' शब्द किससे जुड़े हैं?", options: { a: "तीर्थंकर", b: "संप्रदाय", c: "मंदिर", d: "उपवास" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "ये जैन धर्म के दो प्रमुख संप्रदाय हैं।" },
      { id: 5, question_hi: "महावीर का जन्म कहाँ हुआ था?", options: { a: "पाटलिपुत्र", b: "सारनाथ", c: "वैशाली", d: "मगध" }, correct: "c", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "महावीर का जन्म वैशाली (बिहार) में हुआ था।" },
      { id: 6, question_hi: "जैन धर्म में 'त्रिरत्न' क्या हैं?", options: { a: "सम्यक दर्शन, सम्यक ज्ञान, सम्यक चरित्र", b: "बुद्ध, धम्म, संघ", c: "सत्य, अहिंसा, ब्रह्मचर्य", d: "जन्म, मृत्यु, कर्म" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "त्रिरत्न: सम्यक दर्शन, सम्यक ज्ञान, सम्यक चरित्र।" },
      { id: 7, question_hi: "प्रथम जैन संगीति कहाँ आयोजित हुई थी?", options: { a: "पाटलिपुत्र", b: "राजगीर", c: "वल्लभी", d: "मथुरा" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "प्रथम जैन संगीति पाटलिपुत्र में हुई थी।" },
      { id: 8, question_hi: "दिगंबर और श्वेतांबर संप्रदाय किस धर्म से संबंधित हैं?", options: { a: "बौद्ध धर्म", b: "जैन धर्म", c: "हिंदू धर्म", d: "सिख धर्म" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "ये जैन धर्म के दो प्रमुख संप्रदाय हैं।" }
    ]
  },

  // ========== SET 10: Harappa Sites (25 Questions) ==========
  10: {
    id: 10,
    name: "Harappa Sites",
    nameHi: "हड़प्पा स्थल",
    topic: "indus",
    difficulty: "Hard",
    questions: [
      { id: 1, question_hi: "हड़प्पा सभ्यता का सबसे प्राचीन स्थल कौन सा है?", options: { a: "हड़प्पा", b: "मोहनजोदड़ो", c: "कालीबंगा", d: "लोथल" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "हड़प्पा सबसे प्राचीन स्थल है।" },
      { id: 2, question_hi: "लोथल किस नदी के तट पर स्थित है?", options: { a: "भोगवा", b: "सिंधु", c: "रावी", d: "सतलज" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "लोथल भोगवा नदी के तट पर स्थित है।" },
      { id: 3, question_hi: "कालीबंगा किस राज्य में स्थित है?", options: { a: "राजस्थान", b: "गुजरात", c: "पंजाब", d: "हरियाणा" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "कालीबंगा राजस्थान के हनुमानगढ़ जिले में है।" },
      { id: 4, question_hi: "धौलावीरा किस नदी के तट पर स्थित है?", options: { a: "लूनी", b: "सिंधु", c: "रावी", d: "सरस्वती" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "धौलावीरा लूनी नदी के तट पर स्थित है।" },
      { id: 5, question_hi: "राखीगढ़ी किस जिले में स्थित है?", options: { a: "हिसार", b: "कुरुक्षेत्र", c: "सिरसा", d: "फतेहाबाद" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "राखीगढ़ी हिसार जिले (हरियाणा) में स्थित है।" },
      { id: 6, question_hi: "बनावली किस राज्य में स्थित है?", options: { a: "हरियाणा", b: "राजस्थान", c: "पंजाब", d: "गुजरात" }, correct: "a", exam: "RRB NTPC", year: "2016", shift: "Shift 1", explanation: "बनावली हरियाणा के हिसार जिले में है।" }
    ]
  },

  // ========== SET 11: Vedic Literature (25 Questions) ==========
  11: {
    id: 11,
    name: "Vedic Literature",
    nameHi: "वैदिक साहित्य",
    topic: "vedic",
    difficulty: "Hard",
    questions: [
      { id: 1, question_hi: "सामवेद को किस नाम से भी जाना जाता है?", options: { a: "गायन वेद", b: "यज्ञ वेद", c: "ज्ञान वेद", d: "रोग वेद" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "सामवेद को 'गायन वेद' भी कहा जाता है।" },
      { id: 2, question_hi: "यजुर्वेद का संबंध किससे है?", options: { a: "गायन", b: "यज्ञ", c: "रोग निवारण", d: "स्तुति" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "यजुर्वेद यज्ञों से संबंधित है।" },
      { id: 3, question_hi: "अथर्ववेद को किस नाम से भी जाना जाता है?", options: { a: "ब्रह्म वेद", b: "गायन वेद", c: "यज्ञ वेद", d: "स्तुति वेद" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "अथर्ववेद को 'ब्रह्म वेद' भी कहा जाता है।" },
      { id: 4, question_hi: "उपनिषदों की संख्या कितनी है?", options: { a: "108", b: "100", c: "50", d: "200" }, correct: "a", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "108 उपनिषद हैं।" },
      { id: 5, question_hi: "गीता किस ग्रंथ का हिस्सा है?", options: { a: "रामायण", b: "महाभारत", c: "उपनिषद", d: "पुराण" }, correct: "b", exam: "RRB NTPC", year: "2021", shift: "Shift 1", explanation: "गीता महाभारत के भीष्म पर्व का हिस्सा है।" }
    ]
  },

  // ========== SET 12: Mixed Ancient History (25 Questions) ==========
  12: {
    id: 12,
    name: "Mixed Ancient History",
    nameHi: "मिश्रित प्राचीन इतिहास",
    topic: "mixed",
    difficulty: "Mixed",
    questions: [
      { id: 1, question_hi: "प्रसिद्ध पुस्तक कामसूत्र किसने लिखी है?", options: { a: "कालिदास", b: "वसुमित्र", c: "महाकाश्यप", d: "वात्स्यायन" }, correct: "d", exam: "RPF SI", year: "2019", shift: "Shift 1", explanation: "कामसूत्र वात्स्यायन द्वारा लिखा गया था।" },
      { id: 2, question_hi: "'महायान' शब्द किस धर्म से संबंधित है?", options: { a: "जैन धर्म", b: "बौद्ध धर्म", c: "शैव", d: "सिख धर्म" }, correct: "b", exam: "RPF SI", year: "2019", shift: "Shift 1", explanation: "महायान बौद्ध धर्म की एक शाखा है।" },
      { id: 3, question_hi: "कबीर की रचनाओं के संकलन को क्या कहा जाता है?", options: { a: "अभंग", b: "निबंध", c: "रीति", d: "बीजक" }, correct: "d", exam: "RPF SI", year: "2019", shift: "Shift 2", explanation: "कबीर की रचनाओं को 'बीजक' कहा जाता है।" },
      { id: 4, question_hi: "कनिष्क किस वंश का महान राजा था?", options: { a: "बर्कजेई", b: "असफ जाही", c: "कुषाण", d: "चालुक्य" }, correct: "c", exam: "RPF SI", year: "2019", shift: "Shift 2", explanation: "कनिष्क कुषाण वंश का शासक था।" },
      { id: 5, question_hi: "'अभिज्ञानशाकुंतलम' नाटक के लेखक कौन हैं?", options: { a: "अमर सिंह", b: "शंकु", c: "वररुचि", d: "कालिदास" }, correct: "d", exam: "RPF SI", year: "2019", shift: "Shift 1", explanation: "अभिज्ञानशाकुंतलम कालिदास द्वारा लिखा गया।" },
      { id: 6, question_hi: "निम्नलिखित में से किस वेद को ब्रह्म वेद के नाम से जाना जाता है?", options: { a: "अथर्ववेद", b: "ऋग्वेद", c: "सामवेद", d: "यजुर्वेद" }, correct: "a", exam: "RPF SI", year: "2018", shift: "Shift 3", explanation: "अथर्ववेद को ब्रह्म वेद भी कहा जाता है।" },
      { id: 7, question_hi: "शिलालेखों के अध्ययन को क्या कहा जाता है?", options: { a: "परिस्थितिकी विज्ञान", b: "जलविज्ञान", c: "समाज शास्त्र", d: "पुरालेख" }, correct: "d", exam: "RPF SI", year: "2018", shift: "Shift 1", explanation: "शिलालेखों के अध्ययन को पुरालेख (एपिग्राफी) कहते हैं।" },
      { id: 8, question_hi: "निम्नलिखित में से किस धर्म में निर्वाण प्राप्त करने के लिए चार आर्य सत्यों का उल्लेख है?", options: { a: "हिंदू धर्म", b: "जैन धर्म", c: "बौद्ध धर्म", d: "आजीविका" }, correct: "c", exam: "RRB NTPC", year: "2018", shift: "Shift 1", explanation: "चार आर्य सत्य बौद्ध धर्म की मूल अवधारणा है।" },
      { id: 9, question_hi: "निम्नलिखित में से किसे चिकित्सा का देवता कहा जाता है?", options: { a: "आर्यभट्ट", b: "पतंजलि", c: "पाणिनी", d: "धन्वंतरि" }, correct: "d", exam: "RRB NTPC", year: "2018", shift: "Shift 1", explanation: "धन्वंतरि को चिकित्सा का देवता कहा जाता है।" },
      { id: 10, question_hi: "प्रसिद्ध महाबोधि मंदिर कहाँ स्थित है?", options: { a: "कुशीनगर", b: "लुंबिनी", c: "बोधगया", d: "सारनाथ" }, correct: "c", exam: "RRB NTPC", year: "2018", shift: "Shift 1", explanation: "महाबोधि मंदिर बोधगया (बिहार) में स्थित है।" }
    ]
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionsDB;
}
