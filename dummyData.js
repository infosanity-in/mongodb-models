const tags = [{
  id: '5afc2c9debd9c86ce48b806b',
  name: 'BJP',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b806c',
  name: 'Vaccine',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b806d',
  name: 'COVID',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b806e',
  name: 'Oxygen',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b806f',
  name: 'Bitcoin',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b806g',
  name: 'Scam',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b806h',
  name: 'Sports',
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}];

const roles = [{
  id: '5afc2c9debd9c86ce48b807a',
  name: 'Admin',
  permissions: [{
    module: 'politics',
    access: ['view', 'edit']
  }, {
    module: 'health',
    access: ['view', 'edit']
  }, {
    module: 'currentAffairs',
    access: ['view', 'edit']
  }, {
    module: 'sports',
    access: ['view', 'edit']
  }, {
    module: 'economics',
    access: ['view', 'edit']
  }, {
    module: 'finance',
    access: ['view', 'edit']
  }, {
    module: 'student',
    access: ['view', 'edit']
  }, {
    module: 'technology',
    access: ['view', 'edit']
  }],
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b807b',
  name: 'Politics head',
  permissions: [{
    module: 'politics',
    access: ['view', 'edit']
  }, {
    module: 'health',
    access: ['view']
  }, {
    module: 'currentAffairs',
    access: ['view']
  }, {
    module: 'sports',
    access: ['view']
  }, {
    module: 'economics',
    access: ['view']
  }, {
    module: 'finance',
    access: ['view']
  }, {
    module: 'student',
    access: ['view']
  }, {
    module: 'technology',
    access: ['view']
  }],
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}]

const users = [{
  id: '5afc2c9debd9c86ce48b808a',
  email: 'gauravbansal@gmail.com',
  firstName: 'Gaurav',
  lastName: 'Bansal',
  mobile: {
    countryCode: '',
    number: '',
  },
  isAdmin: false,
  roleId: null,
  token: null,
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b808b',
  email: 'sgurjeet99@gmail.com',
  firstName: 'Gurjeet',
  lastName: 'Babbar',
  mobile: {
    countryCode: '+91',
    number: '7009600955',
  },
  isAdmin: true,
  roleId: '5afc2c9debd9c86ce48b807a',
  token: null,
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b808c',
  email: 'mayank.khanna@gmail.com',
  firstName: 'Mayank',
  lastName: 'Khanna',
  mobile: {
    countryCode: '+91',
    number: '7009600956',
  },
  isAdmin: true,
  roleId: '5afc2c9debd9c86ce48b807a',
  token: null,
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}];

const content = [{
  id: '5afc2c9debd9c86ce48b809c',
  title: 'Olx scam fake army man',
  content: 'olx scam happening where fake army man send QR code to request money',
  flag: 'pending',
  isSpam: '',
  masterVariationId: null,
  isDeleted: false,
  tags: [{
    id: '5afc2c9debd9c86ce48b806g',
    name: 'Scam'
  }],
  reviews: {
    isReviewed: false,
    reviewers: [],
  },
  sourceMetaData: {
    url: '',
    name: '',
    text: '',
  },
  acl: {
    createdBy: {
      id: '5afc2c9debd9c86ce48b808a',
      name: 'Gaurav Bansal',
    },
    updatedBy: {
      id: '5afc2c9debd9c86ce48b808a',
      name: 'Rishabh Kumar',
    },
  },
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b809d',
  title: 'oxygen cylinder in black',
  content: 'people selling oxygen cylinder at 30x costs',
  flag: 'valid',
  isSpam: '',
  masterVariationId: null,
  isDeleted: false,
  tags: [{
    id: '5afc2c9debd9c86ce48b806e',
    name: 'Oxygen'
  }],
  reviews: {
    isReviewed: true,
    reviewers: [{
      id: '5afc2c9debd9c86ce48b808b',
      name: 'Gurjeet Babbar',
      isReviewed: true
    }],
  },
  sourceMetaData: {
    url: '<url-to-news-article>',
    name: '',
    text: '',
  },
  acl: {
    createdBy: {
      id: '5afc2c9debd9c86ce48b808a',
      name: 'Gaurav Bansal',
    },
    updatedBy: {
      id: '5afc2c9debd9c86ce48b808b',
      name: 'Gurjeet Babbar',
    },
  },
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}, {
  id: '5afc2c9debd9c86ce48b809e',
  title: 'boxer shah caugh in doping scandal',
  content: '',
  flag: 'pending',
  isSpam: '',
  masterVariationId: null,
  isDeleted: false,
  tags: [{
    id: '5afc2c9debd9c86ce48b806h',
    name: 'Sports'
  }],
  reviews: {
    isReviewed: false,
    reviewers: [{
      id: '5afc2c9debd9c86ce48b808b',
      name: 'Gurjeet Babbar',
      isReviewed: true
    }, {
      id: '5afc2c9debd9c86ce48b808c',
      name: 'Mayank Khanna',
      isReviewed: false
    }],
  },
  sourceMetaData: {
    url: '<url-to-news-article>',
    name: '',
    text: '',
  },
  acl: {
    createdBy: {
      id: '5afc2c9debd9c86ce48b808a',
      name: 'Gaurav Bansal',
    },
    updatedBy: {
      id: '5afc2c9debd9c86ce48b808b',
      name: 'Gurjeet Babbar',
    },
  },
  createdAt: '2021-04-30T14:12:47.255Z',
  updatedAt: '2021-04-30T14:12:47.255Z',
}];