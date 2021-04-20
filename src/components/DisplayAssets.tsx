import React, {useEffect, useState} from 'react'
import Async from 'react-async'
import Loader from 'react-loader-spinner'

const fetchQuery = (queryString: string) =>
    fetch("https://api.opensea.io/graphql/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-api-key": "0106d29713754b448f4513d7a66d0875",
            "x-build-id": "KueGtGNKNxsRSKYHKdf3z"
        },
        "referrer": "https://opensea.io/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"id\":\"AssetSearchQuery\",\"query\":\"query AssetSearchQuery(\\n  $categories: [CollectionSlug!]\\n  $chains: [ChainScalar!]\\n  $collection: CollectionSlug\\n  $collectionQuery: String\\n  $collectionSortBy: CollectionSort\\n  $collections: [CollectionSlug!]\\n  $count: Int\\n  $cursor: String\\n  $identity: IdentityInputType\\n  $includeHiddenCollections: Boolean\\n  $includeIsListable: Boolean = false\\n  $numericTraits: [TraitRangeType!]\\n  $paymentAssets: [PaymentAssetSymbol!]\\n  $priceRange: RangeType\\n  $query: String\\n  $resultModel: SearchResultModel\\n  $shouldShowQuantity: Boolean = false\\n  $sortAscending: Boolean\\n  $sortBy: SearchSortBy\\n  $stringTraits: [TraitInputType!]\\n  $toggles: [SearchToggle!]\\n) {\\n  query {\\n    ...AssetSearch_data_1vY0Ya\\n  }\\n}\\n\\nfragment AssetCardContent_assetBundle on AssetBundleType {\\n  assetQuantities(first: 18) {\\n    edges {\\n      node {\\n        asset {\\n          relayId\\n          ...AssetMedia_asset\\n          id\\n        }\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment AssetCardContent_asset_1kiIrM on AssetType {\\n  ...AssetMedia_asset\\n  assetContract {\\n    account {\\n      address\\n      chain {\\n        identifier\\n        id\\n      }\\n      id\\n    }\\n    openseaVersion\\n    id\\n  }\\n  tokenId\\n  collection {\\n    slug\\n    id\\n  }\\n}\\n\\nfragment AssetCardFooter_assetBundle on AssetBundleType {\\n  name\\n  assetQuantities(first: 18) {\\n    edges {\\n      node {\\n        asset {\\n          collection {\\n            name\\n            relayId\\n            id\\n          }\\n          id\\n        }\\n        id\\n      }\\n    }\\n  }\\n  assetEventData {\\n    lastSale {\\n      unitPriceQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n  orderData {\\n    bestBid {\\n      orderType\\n      paymentAssetQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n    bestAsk {\\n      closedAt\\n      orderType\\n      dutchAuctionFinalPrice\\n      openedAt\\n      priceFnEndedAt\\n      quantity\\n      decimals\\n      paymentAssetQuantity {\\n        quantity\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment AssetCardFooter_asset_fdERL on AssetType {\\n  ownedQuantity(identity: $identity) @include(if: $shouldShowQuantity)\\n  name\\n  tokenId\\n  collection {\\n    name\\n    id\\n  }\\n  hasUnlockableContent\\n  assetContract {\\n    account {\\n      address\\n      chain {\\n        identifier\\n        id\\n      }\\n      id\\n    }\\n    openseaVersion\\n    id\\n  }\\n  assetEventData {\\n    firstTransfer {\\n      timestamp\\n    }\\n    lastSale {\\n      unitPriceQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n  decimals\\n  orderData {\\n    bestBid {\\n      orderType\\n      paymentAssetQuantity {\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n    bestAsk {\\n      closedAt\\n      orderType\\n      dutchAuctionFinalPrice\\n      openedAt\\n      priceFnEndedAt\\n      quantity\\n      decimals\\n      paymentAssetQuantity {\\n        quantity\\n        ...AssetQuantity_data\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment AssetCardHeader_data on AssetType {\\n  relayId\\n  favoritesCount\\n  isFavorite\\n}\\n\\nfragment AssetMedia_asset on AssetType {\\n  animationUrl\\n  backgroundColor\\n  collection {\\n    description\\n    displayData {\\n      cardDisplayStyle\\n    }\\n    imageUrl\\n    hidden\\n    name\\n    slug\\n    id\\n  }\\n  description\\n  name\\n  tokenId\\n  imageUrl\\n}\\n\\nfragment AssetQuantity_data on AssetQuantityType {\\n  asset {\\n    ...Price_data\\n    id\\n  }\\n  quantity\\n}\\n\\nfragment AssetSearchFilter_data_3zwQJ6 on Query {\\n  ...CollectionFilter_data_1W5IQW\\n  collection(collection: $collection) {\\n    numericTraits {\\n      key\\n      value {\\n        max\\n        min\\n      }\\n      ...NumericTraitFilter_data\\n    }\\n    stringTraits {\\n      key\\n      ...StringTraitFilter_data\\n    }\\n    id\\n  }\\n  ...PaymentFilter_data_2YoIWt\\n}\\n\\nfragment AssetSearchList_data_3ZVFPC on SearchResultType {\\n  asset {\\n    assetContract {\\n      account {\\n        address\\n        id\\n      }\\n      id\\n    }\\n    isListable @include(if: $includeIsListable)\\n    relayId\\n    tokenId\\n    ...AssetSelectionItem_data\\n    ...asset_url\\n    id\\n  }\\n  assetBundle {\\n    relayId\\n    id\\n  }\\n  ...Asset_data_28Onen\\n}\\n\\nfragment AssetSearch_data_1vY0Ya on Query {\\n  ...CollectionHeadMetadata_data_2YoIWt\\n  ...AssetSearchFilter_data_3zwQJ6\\n  ...CategoryBar_data\\n  ...SearchPills_data_2Kg4Sq\\n  search(after: $cursor, chains: $chains, categories: $categories, collections: $collections, first: $count, identity: $identity, numericTraits: $numericTraits, paymentAssets: $paymentAssets, priceRange: $priceRange, querystring: $query, resultType: $resultModel, sortAscending: $sortAscending, sortBy: $sortBy, stringTraits: $stringTraits, toggles: $toggles) {\\n    edges {\\n      node {\\n        ...AssetSearchList_data_3ZVFPC\\n        __typename\\n      }\\n      cursor\\n    }\\n    totalCount\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\\nfragment AssetSelectionItem_data on AssetType {\\n  backgroundColor\\n  collection {\\n    displayData {\\n      cardDisplayStyle\\n    }\\n    imageUrl\\n    id\\n  }\\n  imageUrl\\n  name\\n  relayId\\n}\\n\\nfragment Asset_data_28Onen on SearchResultType {\\n  asset {\\n    assetContract {\\n      account {\\n        chain {\\n          identifier\\n          id\\n        }\\n        id\\n      }\\n      id\\n    }\\n    ...AssetCardHeader_data\\n    ...AssetCardContent_asset_1kiIrM\\n    ...AssetCardFooter_asset_fdERL\\n    ...AssetMedia_asset\\n    ...asset_url\\n    id\\n  }\\n  assetBundle {\\n    slug\\n    assetCount\\n    ...AssetCardContent_assetBundle\\n    ...AssetCardFooter_assetBundle\\n    id\\n  }\\n}\\n\\nfragment CategoryBar_data on Query {\\n  categories {\\n    imageUrl\\n    name\\n    slug\\n  }\\n}\\n\\nfragment CollectionFilter_data_1W5IQW on Query {\\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\\n    edges {\\n      node {\\n        assetCount\\n        imageUrl\\n        name\\n        slug\\n        id\\n      }\\n    }\\n  }\\n  collections(assetOwner: $identity, chains: $chains, first: 100, includeHidden: $includeHiddenCollections, parents: $categories, query: $collectionQuery, sortBy: $collectionSortBy) {\\n    edges {\\n      node {\\n        assetCount\\n        imageUrl\\n        name\\n        slug\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n}\\n\\nfragment CollectionHeadMetadata_data_2YoIWt on Query {\\n  collection(collection: $collection) {\\n    bannerImageUrl\\n    description\\n    imageUrl\\n    name\\n    id\\n  }\\n}\\n\\nfragment CollectionModalContent_data on CollectionType {\\n  description\\n  imageUrl\\n  name\\n  slug\\n}\\n\\nfragment NumericTraitFilter_data on NumericTraitTypePair {\\n  key\\n  value {\\n    max\\n    min\\n  }\\n}\\n\\nfragment PaymentFilter_data_2YoIWt on Query {\\n  paymentAssets(first: 10) {\\n    edges {\\n      node {\\n        asset {\\n          symbol\\n          id\\n        }\\n        relayId\\n        id\\n        __typename\\n      }\\n      cursor\\n    }\\n    pageInfo {\\n      endCursor\\n      hasNextPage\\n    }\\n  }\\n  PaymentFilter_collection: collection(collection: $collection) {\\n    paymentAssets {\\n      asset {\\n        symbol\\n        id\\n      }\\n      relayId\\n      id\\n    }\\n    id\\n  }\\n}\\n\\nfragment Price_data on AssetType {\\n  decimals\\n  imageUrl\\n  symbol\\n  usdSpotPrice\\n  assetContract {\\n    blockExplorerLink\\n    id\\n  }\\n}\\n\\nfragment SearchPills_data_2Kg4Sq on Query {\\n  selectedCollections: collections(first: 25, collections: $collections, includeHidden: true) {\\n    edges {\\n      node {\\n        imageUrl\\n        name\\n        slug\\n        ...CollectionModalContent_data\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment StringTraitFilter_data on StringTraitType {\\n  counts {\\n    count\\n    value\\n  }\\n  key\\n}\\n\\nfragment asset_url on AssetType {\\n  assetContract {\\n    account {\\n      address\\n      chain {\\n        identifier\\n        id\\n      }\\n      id\\n    }\\n    id\\n  }\\n  tokenId\\n}\\n\",\"variables\":{\"categories\":null,\"chains\":null,\"collection\":null,\"collectionQuery\":null,\"collectionSortBy\":\"SEVEN_DAY_VOLUME\",\"collections\":[],\"count\":6,\"cursor\":null,\"identity\":null,\"includeHiddenCollections\":true,\"includeIsListable\":false,\"numericTraits\":null,\"paymentAssets\":null,\"priceRange\":null,\"query\":\"" + queryString + "\",\"resultModel\":null,\"shouldShowQuantity\":false,\"sortAscending\":null,\"sortBy\":null,\"stringTraits\":null,\"toggles\":null}}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

// const edges = result.data.query.search.edges

interface QueryType {
    queryString: string
}

function DisplayAssets(props: QueryType) {
    const {queryString} = props
    const [selectedItem, setSelectedItem] = useState(-1)

    return (
        <>
            <Async promiseFn={() => fetchQuery(queryString)}>
                {
                    ({data, error, isLoading}) => {
                        if (isLoading) {
                            return (
                                <div className="text-center mt-5">
                                    <Loader
                                        type="TailSpin"
                                        color="#C2C2C2"
                                        height={50}
                                        width={50}
                                    />
                                </div>
                            )
                        }
                        if (error) return `Something went wrong: ${error.message}`

                        if (data) {
                            const items = []
                            let edges = data.data.query.search.edges
                            for (let i = 0; i < edges.length; ++i) {
                                const asset = edges[i].node.asset

                                let description = asset && asset.description &&
                                    asset.description.split("\n")
                                        .map((i: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, key: React.Key | null | undefined) => {
                                            return <div key={key}>{i}</div>;
                                        })
                                if (description && description.length > 200)
                                    description = description.splice(0, 200) + '...'

                                if (asset)
                                    items.push(
                                        <div key={i} className="card bg-white mb-5">
                                            <div className="card-header bg-white">
                                                {asset.name}
                                            </div>
                                            <a href={"https://opensea.io/assets/" + asset.assetContract.account.address + "/" + asset.tokenId}>
                                                <img src={asset.imageUrl} className="card-img-top" alt="{asset.name}"/>
                                            </a>
                                            <div
                                                className={"card-body border-top " + (description ? "" : "text-black-50")}>
                                                {description || 'There is nothing to show here'}
                                            </div>
                                        </div>
                                    )
                            }

                            return (
                                <div className="container-lg w-75 mt-4">
                                    {items}
                                </div>
                            )
                        }

                    }}
            </Async>
        </>
    )
}

export default DisplayAssets
