/*
  Janaki Ram Malladi
  Date: 29-05-2024
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
  let NFT = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling,
  };
  NFTs.push(NFT);
  console.log("[+] NFT added");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  console.log("############ NFTs ############");
  for (let i = 0; i < NFTs.length; i++) {
    console.log(
      "NFT ID: " +
        (i + 1) +
        "\n" +
        "Name: " +
        NFTs[i].name +
        "\n" +
        "Eye Color: " +
        NFTs[i].name +
        "\n" +
        "Shirt Type: " +
        NFTs[i].shirtType +
        "\n" +
        "Bling: " +
        NFTs[i].bling,
    );
    console.log("--------------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("Ram", "Blue", "Hoodie", "Gold Chain");
mintNFT("Bob", "Red", "Shirt", "Watch");
mintNFT("Nicholas", "Grey", "Tshirt", "Chain");
mintNFT("Mike", "Green", "Shirt", "Locket");
listNFTs();
getTotalSupply();
