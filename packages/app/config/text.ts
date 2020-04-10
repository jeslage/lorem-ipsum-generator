export type TextObject = {
  label: string;
  value: string;
  paragraph: string[];
  headline: string[];
  subline: string[];
  list: string[];
};

const textConfig: TextObject[] = [
  {
    label: "Lorem Ipsum",
    value: "loremIpsum",
    paragraph: [
      "Lorem Ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    ],
    headline: [
      "Lorem Testheadline ist ganz wichtig und so",
      "Lorem Testheadline zwei ist ganz wichtig und so"
    ],
    subline: [
      "Lorem Testsubline ist ganz wichtig und so",
      "Lorem Testsubline ist ganz wichtig und so"
    ],
    list: ["Punkt 1", "Punkt 2", "Punkt 3"]
  },
  {
    label: "Ich bin ein Berliner - Kennedy",
    value: "kennedySpeech",
    paragraph: [
      "I am proud to come to this city as the guest of your distinguished Mayor, who has symbolized throughout the world the fighting spirit of West Berlin. And I am proud to visit the Federal Republic with your distinguished Chancellor, who for so many years has committed Germany to democracy and freedom and progress, and to come here in the company of my fellow American, General Clay, who has been in this city during its great moments of crisis and will come again if ever needed. Two thousand years ago the proudest boast was: »Civis Romanus sum«. Today, in the world of freedom, the proudest boast is: »Ich bin ein Berliner«.",
      "There are many people in the world who really don’t understand, or say they don’t, what is the great issue between the Free World and the Communist world. Let them come to Berlin. There are some who say that Communism is the wave of the future. Let them come to Berlin. And there are some who say in Europe and elsewhere: We can work with the Communists. Let them come to Berlin. And there are even a few who say that it’s true that Communism is an evil system, but it permits us to make economic progress. Laß sie nach Berlin kommen. Freedom has many difficulties, and democracy is not perfect. But we have never had to put a wall up to keep our people in, to prevent them from leaving us. I want to say on behalf of my countrymen, who live many miles away on the other side of the Atlantic, who are far distant from you, that they take the greatest pride that they have been able to share with you, even from a distance, the story of the last 18 years.",
      "I know of no town, no city that has been besieged for 18 years that still lives with the vitality and the force and the hope and the determination of the city of West Berlin. While the wall is the most obvious and vivid demonstration of the failures of the Communist system for all the world to see, we take no satisfaction in it, for it is, as your Mayor has said, an offence not only against history, but an offence against humanity – separating families, dividing husbands and wives and brothers and sisters, and dividing up people who wish to be joined together. What is true of this city is true of Germany. Real lasting peace in Europe can never be assured as long as one German out of four is denied the elementary right of free men, and that is to make a free choice.",
      "In 18 years of peace and good faith, this generation of Germans has earned the right to be free, including the right to unite their families and their nation in lasting peace with good will to all people. You live in a defended island of freedom. But your life is part of the main.  So let me ask you as I close, to lift your eyes beyond the dangers of today to the hopes of tomorrow, beyond the freedom merely of this city of Berlin, or your country of Germany, to the advance of freedom everywhere, beyond the wall, to the day of peace with justice; beyond yourselves, and ourselves, to all mankind. Freedom is indivisible, and when one man is enslaved, all are not free. When all are free, then we can look forward to that day when this city will be joined as one and this country and this great continent of Europe in a peaceful and hopeful globe.",
      "When that day finally comes, as it will, the people of West Berlin can take sober satisfaction in the fact that they were in the front lines for almost two decades. All free men, wherever they may live, are citizens of Berlin. Therefore, as a free man, I take pride in the words: »Ich bin ein Berliner«"
    ],
    headline: [
      "Vivid demonstration of the failures of the Communist system",
      "Vivid demonstration of the failures of the Communist system"
    ],
    subline: [
      "This generation of Germans has earned the right to be free",
      "This generation of Germans has earned the right to be free"
    ],
    list: ["Punkt 1", "Punkt 2", "Punkt 3"]
  },
  {
    label: "Yes we can - Obama",
    value: "victorySpeech",
    paragraph: [
      "Hello, Chicago. If there is anyone out there who still doubts that America is a place where all things are possible, who still wonders if the dream of our founders is alive in our time, who still questions the power of our democracy, tonight is your answer. It's the answer told by lines that stretched around schools and churches in numbers this nation has never seen, by people who waited three hours and four hours, many for the first time in their lives, because they believed that this time must be different, that their voices could be that difference. It's the answer spoken by young and old, rich and poor, Democrat and Republican, black, white, Hispanic, Asian, Native American, gay, straight, disabled and not disabled, Americans who sent a message to the world that we have never been just a collection of individuals or a collection of red states and blue states. ",
      "We are, and always will be, the United States of America. It's the answer that led those who've been told for so long by so many to be cynical and fearful and doubtful about what we can achieve to put their hands on the arc of history and bend it once more toward the hope of a better day. It's been a long time coming, but tonight, because of what we did on this date in this election at this defining moment, change has come to America. A little bit earlier this evening, I received an extraordinarily gracious call from Senator McCain. Senator McCain fought long and hard in this campaign. And he's fought even longer and harder for the country that he loves. He has endured sacrifices for America that most of us cannot begin to imagine. We are better off for the service rendered by this brave and selfless leader.",
      "I congratulate him; I congratulate Governor (Sarah) Palin for all that they've achieved. And I look forward to working with them to renew this nation's promise in the months ahead. I want to thank my partner in this journey, a man who campaigned from his heart, and spoke for the men and women he grew up with on the streets of Scranton and rode with on the train home to Delaware, the vice president-elect of the United States, Joe Biden. And I would not be standing here tonight without the unyielding support of my best friend for the last 16 years, the rock of our family, the love of my life, the nation's next first lady Michelle Obama. Sasha and Malia I love you both more than you can imagine. And you have earned the new puppy that's coming with us to the new White House. And while she's no longer with us, I know my grandmother's watching, along with the family that made me who I am. I miss them tonight. I know that my debt to them is beyond measure. To my sister Maya, my sister Alma, all my other brothers and sisters, thank you so much for all the support that you've given me. I am grateful to them.",
      "And to my campaign manager, David Plouffe, the unsung hero of this campaign, who built the best - the best political campaign, I think, in the history of the United States of America. To my chief strategist David Axelrod who's been a partner with me every step of the way. To the best campaign team ever assembled in the history of politics, you made this happen and I am forever grateful for what you've sacrificed to get it done. But above all, I will never forget who this victory truly belongs to. It belongs to you. It belongs to you. I was never the likeliest candidate for this office. We didn't start with much money or many endorsements. Our campaign was not hatched in the halls of Washington. It began in the backyards of Des Moines and the living rooms of Concord and the front porches of Charleston.",
      "It was built by working men and women who dug into what little savings they had to give 5 and 10 and 20 to the cause. It grew strength from the young people who rejected the myth of their generation's apathy, who left their homes and their families for jobs that offered little pay and less sleep. It drew strength from the not-so-young people who braved the bitter cold and scorching heat to knock on doors of perfect strangers, and from the millions of Americans who volunteered and organised and proved that more than two centuries later a government of the people, by the people, and for the people has not perished from the Earth. This is your victory. And I know you didn't do this just to win an election. And I know you didn't do it for me. You did it because you understand the enormity of the task that lies ahead. For even as we celebrate tonight, we know the challenges that tomorrow will bring are the greatest of our lifetime - two wars, a planet in peril, the worst financial crisis in a century. Even as we stand here tonight, we know there are brave Americans waking up in the deserts of Iraq and the mountains of Afghanistan to risk their lives for us. There are mothers and fathers who will lie awake after the children fall asleep and wonder how they'll make the mortgage or pay their doctors' bills or save enough for their child's college education. There's new energy to harness, new jobs to be created, new schools to build, and threats to meet, alliances to repair. The road ahead will be long. Our climb will be steep. We may not get there in one year or even in one term. But, America, I have never been more hopeful than I am tonight that we will get there. I promise you, we as a people will get there. There will be setbacks and false starts.",
      "There are many who won't agree with every decision or policy I make as president. And we know the government can't solve every problem. But I will always be honest with you about the challenges we face. I will listen to you, especially when we disagree. And, above all, I will ask you to join in the work of remaking this nation, the only way it's been done in America for 221 years - block by block, brick by brick, calloused hand by calloused hand. What began 21 months ago in the depths of winter cannot end on this autumn night. This victory alone is not the change we seek. It is only the chance for us to make that change. And that cannot happen if we go back to the way things were. It can't happen without you, without a new spirit of service, a new spirit of sacrifice. So let us summon a new spirit of patriotism, of responsibility, where each of us resolves to pitch in and work harder and look after not only ourselves but each other.",
      "Let us remember that, if this financial crisis taught us anything, it's that we cannot have a thriving Wall Street while Main Street suffers. In this country, we rise or fall as one nation, as one people. Let's resist the temptation to fall back on the same partisanship and pettiness and immaturity that has poisoned our politics for so long. Let's remember that it was a man from this state who first carried the banner of the Republican Party to the White House, a party founded on the values of self-reliance and individual liberty and national unity. Those are values that we all share. And while the Democratic Party has won a great victory tonight, we do so with a measure of humility and determination to heal the divides that have held back our progress.",
      "As Lincoln said to a nation far more divided than ours, we are not enemies but friends. Though passion may have strained, it must not break our bonds of affection. And to those Americans whose support I have yet to earn, I may not have won your vote tonight, but I hear your voices. I need your help. And I will be your president, too. And to all those watching tonight from beyond our shores, from parliaments and palaces, to those who are huddled around radios in the forgotten corners of the world, our stories are singular, but our destiny is shared, and a new dawn of American leadership is at hand. To those - to those who would tear the world down: We will defeat you. To those who seek peace and security: We support you. And to all those who have wondered if America's beacon still burns as bright: Tonight we proved once more that the true strength of our nation comes not from the might of our arms or the scale of our wealth, but from the enduring power of our ideals: democracy, liberty, opportunity and unyielding hope.",
      "That's the true genius of America: that America can change. Our union can be perfected. What we've already achieved gives us hope for what we can and must achieve tomorrow. This election had many firsts and many stories that will be told for generations. But one that's on my mind tonight's about a woman who cast her ballot in Atlanta. She's a lot like the millions of others who stood in line to make their voice heard in this election except for one thing: Ann Nixon Cooper is 106 years old. She was born just a generation past slavery; a time when there were no cars on the road or planes in the sky; when someone like her couldn't vote for two reasons - because she was a woman and because of the colour of her skin.",
      "And tonight, I think about all that she's seen throughout her century in America - the heartache and the hope; the struggle and the progress; the times we were told that we can't, and the people who pressed on with that American creed: Yes we can. At a time when women's voices were silenced and their hopes dismissed, she lived to see them stand up and speak out and reach for the ballot. Yes we can. When there was despair in the dust bowl and depression across the land, she saw a nation conquer fear itself with a New Deal, new jobs, a new sense of common purpose. Yes we can. When the bombs fell on our harbour and tyranny threatened the world, she was there to witness a generation rise to greatness and a democracy was saved. Yes we can. She was there for the buses in Montgomery, the hoses in Birmingham, a bridge in Selma, and a preacher from Atlanta who told a people that 'We Shall Overcome'. Yes we can. A man touched down on the moon, a wall came down in Berlin, a world was connected by our own science and imagination.",
      "And this year, in this election, she touched her finger to a screen, and cast her vote, because after 106 years in America, through the best of times and the darkest of hours, she knows how America can change. Yes we can. America, we have come so far. We have seen so much. But there is so much more to do. So tonight, let us ask ourselves - if our children should live to see the next century; if my daughters should be so lucky to live as long as Ann Nixon Cooper, what change will they see? What progress will we have made? This is our chance to answer that call. This is our moment. This is our time, to put our people back to work and open doors of opportunity for our kids; to restore prosperity and promote the cause of peace; to reclaim the American dream and reaffirm that fundamental truth, that, out of many, we are one; that while we breathe, we hope. And where we are met with cynicism and doubts and those who tell us that we can't, we will respond with that timeless creed that sums up the spirit of a people: Yes, we can. Thank you. God bless you. And may God bless the United States of America."
    ],
    headline: ["Yes we can", "Yes we can"],
    subline: ["Yes we can", "Yes we can"],
    list: ["Punkt 1", "Punkt 2", "Punkt 3"]
  },
  {
    label: "Trump Ipsum",
    value: "trumpIpsum",
    paragraph: [
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? Lorem Ispum is a choke artist. It chokes! We are going to make placeholder text great again. Greater than ever before. I have a 10 year old son. He has words. He is so good with these words it's unbelievable. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. That other text? Sadly, it’s no longer a 10. He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured.",
      "You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? The best taco bowls are made in Trump Tower Grill. I love Hispanics! The other thing with Lorem Ipsum is that you have to take out its family. I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some great, great text on your website’s Southern border, and I will make Google pay for that text. Mark my words.",
      "I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? My text is long and beautiful, as, it has been well documented, are various other parts of my website. I know words. I have the best words. Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision.",
      "You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words. I know words. I have the best words."
    ],
    headline: [
      "It could be Russia, but it could also be China",
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?"
    ],
    subline: [
      "It could be Russia, but it could also be China",
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?"
    ],
    list: ["Punkt 1", "Punkt 2", "Punkt 3"]
  },
  {
    label: "Hipster Ipsum",
    value: "hipsterIpsum",
    paragraph: [
      "Wolf typewriter squid fixie, sartorial helvetica affogato tote bag normcore williamsburg kombucha freegan pickled put a bird on it 90's. Salvia pour-over cliche hot chicken banh mi. Synth viral whatever schlitz lumbersexual lomo brooklyn authentic +1 selfies. Kinfolk unicorn green juice blog four loko, swag prism shoreditch hashtag meh. Live-edge meh bitters taxidermy ramps meggings poke 90's crucifix cray cornhole copper mug everyday carry slow-carb. Ugh etsy crucifix, beard photo booth narwhal authentic brooklyn chia normcore.",
      "Cardigan blue bottle succulents twee hexagon swag. Vice slow-carb chartreuse ugh, thundercats DIY mustache kogi vinyl. Adaptogen hot chicken tbh prism food truck, helvetica slow-carb waistcoat lomo succulents pinterest poke. Keffiyeh mumblecore tofu PBR&B normcore helvetica. Shoreditch craft beer tattooed venmo. Echo park semiotics gastropub meggings.",
      "Migas edison bulb bushwick microdosing before they sold out, street art kitsch vegan kogi fashion axe single-origin coffee enamel pin bespoke taiyaki. Godard palo santo schlitz small batch enamel pin irony locavore kitsch asymmetrical microdosing YOLO woke tofu. Keffiyeh offal neutra, succulents next level forage adaptogen heirloom williamsburg iceland hammock jean shorts. Forage heirloom activated charcoal roof party sustainable fixie jianbing celiac williamsburg subway tile trust fund crucifix.",
      "Sustainable sartorial fingerstache snackwave. Photo booth tbh chartreuse master cleanse pug cold-pressed slow-carb cloud bread occupy. Banjo cardigan pabst, cornhole try-hard bicycle rights next level jean shorts tacos sriracha. Activated charcoal mixtape cronut celiac organic skateboard farm-to-table butcher ugh freegan meditation pork belly la croix taxidermy. Kale chips adaptogen tumblr XOXO lyft fanny pack chillwave swag raw denim readymade chambray flexitarian humblebrag hell of.",
      "You probably haven't heard of them unicorn sustainable, iPhone ugh kitsch photo booth. Actually raw denim vape, green juice mixtape before they sold out shabby chic neutra poutine. Enamel pin tousled hammock, 3 wolf moon fashion axe kale chips messenger bag health goth stumptown man bun pitchfork shoreditch asymmetrical. Meh authentic tacos crucifix, tbh gentrify blue bottle. Pabst vape kinfolk heirloom cardigan.",
      "Echo park pok pok direct trade subway tile hoodie, celiac succulents tumeric pitchfork shoreditch butcher. Gochujang pitchfork forage PBR&B williamsburg, normcore man braid tilde waistcoat tattooed pinterest. Pickled franzen kombucha, organic chillwave seitan cred cray gentrify lomo. Chartreuse street art YOLO pickled keffiyeh succulents gastropub jean shorts. Fingerstache tofu banh mi, jean shorts hell of cliche literally lyft chicharrones chillwave jianbing. Keytar irony twee beard PBR&B. Drinking vinegar aesthetic ramps meh humblebrag narwhal.",
      "Cardigan adaptogen fingerstache helvetica 8-bit williamsburg jean shorts. Affogato fashion axe kinfolk lo-fi etsy mixtape poutine trust fund. Hell of synth trust fund, ramps subway tile forage pabst. Shoreditch williamsburg master cleanse succulents skateboard selvage semiotics.",
      "Distillery tattooed typewriter vexillologist, artisan truffaut cornhole. Vegan brunch twee, wayfarers cold-pressed gluten-free intelligentsia everyday carry affogato activated charcoal fanny pack snackwave locavore. Tumeric migas you probably haven't heard of them, letterpress intelligentsia 90's blue bottle post-ironic vinyl pabst gentrify kogi beard farm-to-table hot chicken. Hashtag raclette adaptogen, tbh microdosing poke chicharrones forage distillery put a bird on it viral palo santo portland.",
      "Synth YOLO master cleanse lomo literally marfa brunch vegan. Authentic unicorn edison bulb fashion axe dreamcatcher, kale chips meh green juice mumblecore beard PBR&B pug meditation flannel williamsburg. Pickled hexagon pork belly mumblecore meditation venmo street art thundercats fixie occupy brunch air plant deep v biodiesel. Salvia artisan fam cray vape helvetica beard brunch celiac bespoke. Venmo single-origin coffee meh farm-to-table.",
      "Enamel pin literally dreamcatcher typewriter direct trade celiac. Live-edge letterpress subway tile typewriter. Post-ironic normcore DIY cred kinfolk palo santo echo park vice tattooed meggings prism street art retro. Succulents snackwave try-hard food truck fingerstache truffaut pour-over mustache twee yr hexagon locavore organic irony."
    ],
    headline: [
      "You probably haven't heard of them unicorn sustainable, iPhone ugh kitsch photo booth.",
      "Succulents snackwave try-hard food truck fingerstache truffaut pour-over mustache twee yr hexagon locavore organic irony."
    ],
    subline: [
      "Succulents snackwave try-hard food truck fingerstache truffaut pour-over mustache twee yr hexagon locavore organic irony.",
      "You probably haven't heard of them unicorn sustainable, iPhone ugh kitsch photo booth."
    ],
    list: ["Punkt 1", "Punkt 2", "Punkt 3"]
  },
  {
    label: "Blockchain Ipsum",
    value: "blockchainIpsum",
    paragraph: [
      "When Ethereum surrendered few fundamental analysis in a public key, blockchain forgot a hashrate behind lots of distributed denial of service attack! Although Decred formed lots of provably side chain, Decred sharded the provably fair mnemonic phrase! Decred formed lots of distributed denial of service attack when Silk Road thought some minimum escrow, but Ripple limited some IPO at some REKT! ICO allowed the constant distributed denial of service attack!",
      "Someone generated some technical analysis. Maker looked at a market cap during a public key! Because Augur identified some all-time-low behind the difficulty, TRON threw away a algo-traded gas for the moon.",
      "Dogecoin identified the volume until lots of on-ledger currency because Ravencoin is few custodial in few anti-money laundering, nor OmiseGo controls many hot bear trap behind lots of public key! OmiseGo stacks a quick volume, yet because someone is wary of a robust consensus point behind lots of decentralised autonomous organisation, Binance Coin generates many peer-to-peer network. They cut off lots of hard fork, yet because SHA 256 was lots of algo-traded algorithm, Cardano slept on lots of algo-traded bear trap. When Silk Road sharded lots of moon for many bear trap, IOTA cut off few vanity address in many digital signature.",
      "Waves halving lots of centralised whale. When Monero stuck many SHA 256 in many dapp, Monero managed many considerable accidental fork. When VeChain chose some burned hard fork during lots of chain, Ontology should be few centralised bear of the ICO, however, it rejoins few proof of work after lots of crypto-jacking! OmiseGo cut off some constant token generation event when TRON cut off the ashdraked, for Ethereum accompanied by few constant zero knowledge proof. Zilliqa thought a market cap at many IPO, so Basic Attention Token allowed a minimum public key of lots of permissioned ledger!",
      "NEO looked at a minimum altcoin behind many burned. Mt. Gox left some safe mnemonic phrase, so it accompanied by few multi signature behind many whitepaper although Satoshi Nakamoto froze the robust unconfirmed during a proof of work! Stellar stuck a segregated witness, so Digitex Futures cost many exchange in many astroturfing when they forgot few consensus point. OmiseGo bought few zero confirmation transaction!",
      "NEO stacks a robust ledger, so Nexo looked at many hot wallet because Ravencoin returns many permissioned ledger! Ontology identified a accidental fork during many do your own research! ERC20 token standard detected some instamine for the confirmation when Mt. Gox accompanied by few blockchain after many blockchain, or although Bitcoin halving lots of hot genesis block in lots of distributed denial of service attack, Mt. Gox forgot few token generation event!",
      "Since ICO identified many amazing all-time-low after a block, Bitcoin controls some immutable orphan! Tether cut off some crypto-jacking of some whitepaper, for because Ravencoin generates few fiat during some whale, Augur specialises in the attestation ledger until many protocol. Although Basic Attention Token chose many nonce, Zcash identified some unspent transaction output behind few hot wallet, for NFT broadcast the algo-traded max supply. Golem is wary of many dead cat bounce when Dogecoin mining few dead cat bounce, yet since EOS slept on many efficient attestation ledger at a node, Bitcoin built lots of reinvested whale in lots of public key!",
      "Golem counted some mainnet, and NFT left lots of automated smart contract! Zilliqa surrendered some airdrop! Because they cut off lots of efficient stale block during a fundamental analysis, Ravencoin stacks many amazing stale block.",
      "Satoshi Nakamoto slept on few proof of work because Binance Coin sharded many decentralisation, and IOTA returns few smart contract during the blockchain! TRON returns few minimum ICO, therefore, although Lightning Network was the technical analysis, it controls the difficulty. OmiseGo thought many hot non-fungible token behind few faucet although someone detected the deterministic wallet behind some node! EOS data mining few safe custodial!",
      "Ether broadcast the efficient coin during the anti-money laundering, so although Ravencoin rejoins the algo-traded pump and dump for few ashdraked, Bitcoin Cash formed many immutable vaporware for a vanity address. Although TRON chose lots of immutable bubble, IPO returns many consensus process behind the 51% attack, therefore, ERC721 token standard cost some attestation ledger after many double spend. Ethereum cooperated a robust distributed ledger for many orphan when Maker could be the quick unconfirmed at lots of hyperledger, and because Golem proves lots of dolphin, Ontology proves a altcoin in some private chain!"
    ],
    headline: [
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?",
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?"
    ],
    subline: [
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?",
      "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right?"
    ],
    list: ["Punkt 1", "Punkt 2", "Punkt 3"]
  }
];

export default textConfig;
