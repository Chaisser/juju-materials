interface MaterialArray {
  [key: string]: {
    ['tr']: string;
    ['en']: string;
  };
}

interface ColorArray {
  [key: string]: {
    ['tr']: string;
    ['en']: string;
    ['code']: string;
  };
}

const materials: MaterialArray = {
  M: {
    tr: 'Metal Rengi',
    en: 'Metal Color',
  }, // Metal Rengi
  SMC: {
    tr: 'İkinci Metal Rengi',
    en: 'Second Metal Color',
  }, // İkinci Metal Rengi
  TMC: {
    tr: 'Üçüncü Metal Rengi',
    en: 'Third Metal Color',
  }, // Üçüncü Metal Rengi
  C: {
    tr: 'İp Rengi',
    en: 'Cord Color',
  }, // İp Rengi
  SC: {
    tr: 'İkinci İp Rengi',
    en: 'Second Cord Color',
  }, // İkinci İp Rengi
  S: {
    tr: 'Taş Rengi',
    en: 'Stone Color',
  }, // Taş Rengi
  E: {
    tr: 'Mine Rengi',
    en: 'Enamel Color',
  }, // Mine Rengi
  SEC: {
    tr: 'İkinci Mine Rengi',
    en: 'Second Enamel Color',
  }, // İkinci Mine Rengi
  TEC: {
    tr: 'Üçüncü Mine Rengi',
    en: 'Third Enamel Color',
  }, // Üçüncü Mine Rengi
  FEC: {
    tr: 'Dördüncü Mine Rengi',
    en: 'Forth Enamel Color',
  }, // Dördüncü Mine Rengi
  LC: {
    tr: 'Kilit Rengi',
    en: 'Lock Color',
  }, // Kilit Rengi
  YKC: {
    tr: 'Kalın İp',
    en: 'Thick Cord',
  }, // Kalın İp Rengi
  YDT: {
    tr: 'Doğal Taş',
    en: 'Nautral Stone',
  }, // Doğal Taş Rengi
  SSC: {
    tr: 'İkinci Taş Rengi',
    en: 'Second Stone Color',
  }, // İkinci Taş Rengi
  SNS: {
    tr: 'İkinci Doğal Taş',
    en: 'Second Natural Stone',
  }, // İkinci Doğal Taş Rengi
  YK: {
    tr: 'Yuvarlak Kalın İp',
    en: 'Round Thick Cord',
  }, // Yuvarlak Kalın İp
};

const colors: ColorArray = {
  G: {
    tr: 'Altın',
    en: 'Gold',
    code: '#f8d70a',
  },
  S: {
    tr: 'Gümüş',
    en: 'Silver',
    code: '#d7d9db',
  },
  L: {
    tr: 'Siyah',
    en: 'Black',
    code: '#030303',
  },
  X: {
    tr: 'Eskitilmiş Altın',
    en: 'Oxidized Gold',
    code: '#deaa04',
  },
  B: {
    tr: 'Bej',
    en: 'Sand',
    code: '#f9dc92',
  },
  R: {
    tr: 'Kırmızı',
    en: 'Red',
    code: '#e6061b',
  },
  N: {
    tr: 'Lacivert',
    en: 'Navy',
    code: '#153b64',
  },
  U: {
    tr: 'Mavi',
    en: 'Blue',
    code: '#1a9ff1',
  },
  Y: {
    tr: 'Sarı',
    en: 'Yellow',
    code: '#fde637',
  },
  O: {
    tr: 'Turuncu',
    en: 'Orange',
    code: '#f7980a',
  },
  C: {
    tr: 'Gri',
    en: 'Gray',
    code: '#686868',
  },
  J: {
    tr: 'Bordo',
    en: 'Burgundy',
    code: '#830c1d',
  },
  M: {
    tr: 'Yeşil',
    en: 'Green',
    code: '#0a970b',
  },
  E: {
    tr: 'Pembe',
    en: 'Pink',
    code: '#f03bd8',
  },
  Q: {
    tr: 'Beyaz',
    en: 'White',
    code: '#f6f6f6',
  },
  P: {
    tr: 'Mor',
    en: 'Purple',
    code: '#9612de',
  },
  T: {
    tr: 'Turkuaz',
    en: 'Turquoise',
    code: '#42e2f7',
  },
  W: {
    tr: 'Koyu Yeşil',
    en: 'Dark Green',
    code: '#075603',
  },
  V: {
    tr: 'Roze Altın',
    en: 'Rose Gold',
    code: '#e4a386',
  },
  YMRCN: {
    tr: 'Mercan',
    en: 'Coral',
    code: '#fc6a1f',
  },
  F: {
    tr: 'Füme',
    en: 'Smoky Grey',
    code: '#4a4a4a',
  },
  K: {
    tr: 'Kahverengi',
    en: 'Mocha',
    code: '#974305',
  },
  A: {
    tr: 'Fuşya',
    en: 'Fuschia',
    code: '#a80f7c',
  },
  DEFAULT: {
    tr: 'DEFAULT',
    en: 'DEFAULT',
    code: '#f3fd79',
  },
  D: {
    tr: 'İnci',
    en: 'Pearl',
    code: '#e8e8e8',
  },
  Z: {
    tr: 'Mint',
    en: 'Mint',
    code: '#3eb489',
  },
  MIX: {
    tr: 'Mix',
    en: 'Mix',
    code: '#ffffff',
  },
  SB: {
    tr: 'Simli Bej',
    en: 'Silvery Beige',
    code: '#ffcc07',
  },
  SO: {
    tr: 'Simli Roze',
    en: 'Silvery Roze',
    code: '#f99f05',
  },
  LP: {
    tr: 'Açık Pembe',
    en: 'Light Pink',
    code: '#feacfa',
  },
  WG: {
    tr: 'Su Yeşili',
    en: 'Nile Green',
    code: '#9ce8db',
  },
  TB: {
    tr: 'Turkuaz Mavi',
    en: 'Blue Turquoise',
    code: '#5ba7f7',
  },
  TE: {
    tr: 'Kaplan Gözü',
    en: "Tiger's Eyes",
    code: '#af8815',
  },
  SC: {
    tr: 'Simli İp',
    en: 'Silvery Cord',
    code: '#1273de',
  },
  OB: {
    tr: 'Petrol Mavisi',
    en: 'Patrol Blue',
    code: '#014b58',
  },
  DB: {
    tr: 'Koyu Mavi',
    en: 'Dark Blue',
    code: '#0c1937',
  },
  KG: {
    tr: 'Haki Yeşili',
    en: 'Khaki',
    code: '#475c31',
  },
  BB: {
    tr: 'Bebek Mavisi',
    en: 'Baby Blue',
    code: '#c3edfb',
  },
  DP: {
    tr: 'Gül Kurusu',
    en: 'Dusty Rose',
    code: '#c3286a',
  },
};

const materialsFromSku = (sku: string, locale: 'tr' | 'en' = 'tr') => {
  if (!sku) {
    return {};
  }
  const explodeSku = sku.split('-');

  if (explodeSku.length === 0) {
    return {};
  }

  let result = {};
  explodeSku.map((item) => {
    const explodeItem = item.split(':');
    if (explodeItem.length === 2) {
      const materialItem = explodeItem[0];
      const material = materials[materialItem];
      const color = colors[explodeItem[1]];
      const dimension = `${material[locale]}`;
      result = { ...result, [dimension]: color };
    }
    return 'ok';
  });

  return result;
};

module.exports = {
  materials,
  colors,
  materialsFromSku,
};
