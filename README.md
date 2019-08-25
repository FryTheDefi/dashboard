## Inspiration
Defiscan.io, Loanscan.io, Instadapp.io and I think many more were jumpstart for us, but all felt lonely, single player.

## What it does
Showing data from Uniswap and Dydx - DAI and you can get new account in web2.0 by leveraging Torus. By statistics 90% users leave dapps because of Metamask install procedure. We believe using technology signing with Google into Dapp provides smoother onboarding.

By visiting first time, you can top up via fiat on-ramp your account and lend your money on Compound.finance, watch how interest rates are going and chat with other lenders & borrowers around.

You can also request money (because ETH IS MONEY) in chat room from other people.

Plan is to gamify De-Fi with chat and having your personal scoreboard with best interest rates you hitted

## How we built it
Sign-in is made with Torus to help onboard people without having Metamask, just having email account.
Chat is made with 3box messaging library.
Data are made available through The Graph using subgraph and querying using vue-apollo
You can swap tokens using Kyber Widget

## Challenges we ran into
Torus integration got us headaches as we planned to have seamless and fiat on-ramp also for Metamask users, but that would require an export key from MM and import it to Torus, which we postponed for now.

In first, we decided to make very own subgraph for all data and that resulted into lost time, so we decided to not loose any more time and use one from their market place, which seems better idea then.

With 3box spaces we ran into bugs like could not fetch more profiles, probably ipfs quirks and 3box team confirmed that. Problems with topics querying.

## Accomplishments that we're proud of
- Torus integration
- 3box chats
- The Graph queries using vue-apollo
- Kyber token swap

## What we learned
Drink more water and take pauses. Also, using 3box, Torus, querying The Graphs subgraph and KyberWidget for donations for data

## What's next for Fry the DeFi
We had in mind to use Chainlink, but we did not make it. Originally it was planed as very slick DeFi dashboard

Github repository https://github.com/FryTheDefi/dashboard
