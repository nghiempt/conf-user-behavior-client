const APPS = [
  {
    app_id: 1,
    app_name: "Facebook",
    app_thumbnail: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo=w480-h960-rw",
    app_category: {
      category_id: 1,
      category_name: "Social Network"
    },
    app_developer: "Meta Platforms, Inc.",
    app_store_url: "https://play.google.com/store/apps/details?id=com.facebook.katana&hl=vi&gl=US",
    data_safety: {
      data_shared: [
        "Personal Info",
        "Approximate Location",
      ],
      data_collected: [
        "Audio",
        "Microphone",
      ],
    },
    privacy_policy: {
      data_shared: "We will collect and share your GPS location.",
      data_collected: "We will collect Audio, Mircophone and Contact.",
    },
    status: {
      incorrect: {
        status: true,
        description: "Because Data Safety only mentions collecting Audio and Microphone, but Privacy Policy also mentions Contact.",
      },
      incomplete: {
        status: false,
        description: "We have not detected Incomplete behavior",
      },
      inconsistent: {
        status: true,
        description: "Because Data Safety mentions sharing approximate location, but Privacy Policy says it will share GPS as Precise Location.",
      }
    }
  },
];

export const FAKE = {
  APPS,
};
