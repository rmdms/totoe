module.exports = {
  comments: {
    relatedContentTypes: {
      posts: {
        contentManager: true,
        isSingle: true,
        key: "title",
        value: "id",
      },
    },
    enabled: true,
    config: {
      enabledCollections:["api::post.post"],
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::post.post"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::post.post": ["MyField"],
      },
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {
        // ...
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 100,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};
