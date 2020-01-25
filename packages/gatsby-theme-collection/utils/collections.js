const crypto = require("crypto");

module.exports = {
  /* createCollections: (mdxItems, createNodeId) => {
    const collections = [];
    for (let idx = 0; idx < mdxItems.length; idx++) {
      const mdxItem = mdxItems[idx];
      module.exports.updateCollection(mdxItem, collections, createNodeId);
    }
    return collections;
  },*/
  updateCollection: (
    mdxItem,
    collections,
    baseUrl,
    collectionName,
    subCollectionName,
    createNodeId,
  ) => {
    let collectionUrl = `${baseUrl}/${collectionName}/`;
    let subCollectionUrl = `${baseUrl}/${collectionName}/${subCollectionName}/`;
    collectionUrl = collectionUrl.replace(/\/\//g, "/").replace(/\/\//g, "/");
    subCollectionUrl = subCollectionUrl
      .replace(/\/\//g, "/")
      .replace(/\/\//g, "/");
    let collectionItemAdded = false;
    const cName =
      collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
    const subCName =
      subCollectionName.charAt(0).toUpperCase() + subCollectionName.slice(1);
    for (
      let collectionIdx = 0;
      collectionIdx < collections.length;
      collectionIdx++
    ) {
      if (collections[collectionIdx].name === cName) {
        if (subCollectionName !== "") {
          for (
            let subCollectionIdx = 0;
            subCollectionIdx < collections[collectionIdx].subCollection.length;
            subCollectionIdx++
          ) {
            if (
              collections[collectionIdx].subCollection[subCollectionIdx]
                .name === subCName
            ) {
              collectionItemAdded = true;
              collections[collectionIdx].subCollection[
                subCollectionIdx
              ].items.push(mdxItem);
              break;
            }
          }
        }
        if (collectionItemAdded === false && subCName !== "") {
          collectionItemAdded = true;
          const subCollectionItem = {
            id: createNodeId(`${subCollectionName} >>> CollectionMdx`),
            name: subCName,
            slug: subCollectionUrl,
            items: [mdxItem],
            subCollection: [],
          };
          collections[collectionIdx].subCollection.push(subCollectionItem);
        } else {
          collectionItemAdded = true;
          collections[collectionIdx].items.push(mdxItem);
        }
      }
    }
    if (collectionItemAdded === false) {
      collectionItemAdded = true;
      let collectionItem = {
        id: createNodeId(`${collectionName} >>> CollectionMdx`),
        name: cName,
        slug: collectionUrl,
        items: [mdxItem],
        subCollection: [],
      };
      if (subCollectionName !== "") {
        collectionItem = {
          ...collectionItem,
          items: [],
          subCollection: [
            {
              id: createNodeId(`${subCollectionName} >>> CollectionMdx`),
              name: subCName,
              slug: subCollectionUrl,
              items: [mdxItem],
            },
          ],
        };
      }
      collections.push(collectionItem);
    }
  },
  updateCollectionNode: (collection) => {
    let updatedCollection = {
      ...collection,
    };
    for (
      let subCollectionIdx = 0;
      subCollectionIdx < collection.subCollection.length;
      subCollectionIdx++
    ) {
      const subCollection = updatedCollection.subCollection[subCollectionIdx];
      updatedCollection.subCollection[subCollectionIdx] = {
        ...subCollection,
        internal: {
          type: "CollectionMdx",
          contentDigest: crypto
            .createHash("md5")
            .update(JSON.stringify(subCollection))
            .digest("hex"),
          content: JSON.stringify(subCollection),
          description: "Collection",
        },
      };
    }
    updatedCollection = {
      ...updatedCollection,
      children: [],
      internal: {
        type: "CollectionMdx",
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(updatedCollection))
          .digest("hex"),
        content: JSON.stringify(updatedCollection),
        description: "Collection",
      },
    };
    return updatedCollection;
  },
};
