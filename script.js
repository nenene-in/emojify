var _0xef3b18=_0x4d53;(function(_0x56f96b,_0x4066e0){var _0x5ae992=_0x4d53,_0x519655=_0x56f96b();while(!![]){try{var _0x3becca=-parseInt(_0x5ae992(0x1c7))/0x1+-parseInt(_0x5ae992(0x1d9))/0x2+-parseInt(_0x5ae992(0x209))/0x3*(-parseInt(_0x5ae992(0x1e5))/0x4)+parseInt(_0x5ae992(0x224))/0x5+-parseInt(_0x5ae992(0x25d))/0x6+-parseInt(_0x5ae992(0x1bc))/0x7*(parseInt(_0x5ae992(0x210))/0x8)+-parseInt(_0x5ae992(0x1e3))/0x9*(-parseInt(_0x5ae992(0x20c))/0xa);if(_0x3becca===_0x4066e0)break;else _0x519655['push'](_0x519655['shift']());}catch(_0x34269d){_0x519655['push'](_0x519655['shift']());}}}(_0x3935,0xbb900));let isDev=!0x1,samplePuzzles=[{'date':_0xef3b18(0x27d),'category':_0xef3b18(0x27f),'puzzle':'🦁👑','answer':_0xef3b18(0x253),'info':_0xef3b18(0x1ba),'link':'https://en.wikipedia.org/wiki/The_Lion_King'},{'date':_0xef3b18(0x27d),'category':'television','puzzle':'👽🚲🌕','answer':'STRANGER\x20THINGS','info':_0xef3b18(0x26a),'link':_0xef3b18(0x232)},{'date':'2023-09-24','category':_0xef3b18(0x1cc),'puzzle':_0xef3b18(0x23f),'answer':'EYE\x20OF\x20THE\x20TIGER','info':_0xef3b18(0x1ea),'link':'https://en.wikipedia.org/wiki/Eye_of_the_Tiger'}],correctEmojis=['🎉','✅','😄','🌟','🏆','👍','👏','🥳'],incorrectEmojis=['❌','😕','😬','👎','🤔','😢','🚫','😞'],celebrationEmojis=['🎉','🎊','🥳','👏','🏆','🌟','✅'],score=0x64,guessedLetters=[],incorrectGuesses=0x0,currentPuzzleIndex=0x0,puzzles=[],puzzleData,totalPuzzlesPerDay=0x3,puzzlesSolved=0x0,gameOver=!0x1,puzzleStartTime,timePenaltyInterval,timeLimitPerPuzzle=0x14,pointsPerSecond=0x1,maxTimePenaltyPerPuzzle=0x14;function loadGameState(){var _0xa00b63=_0xef3b18,_0x88112c={'kYaiA':'emojifyGameState'},_0x127130=localStorage[_0xa00b63(0x1b9)](_0x88112c[_0xa00b63(0x254)]);(_0x127130?(_0x127130=JSON[_0xa00b63(0x202)](_0x127130),score=_0x127130['score'],currentPuzzleIndex=_0x127130[_0xa00b63(0x25a)],puzzlesSolved=_0x127130[_0xa00b63(0x22a)],puzzles=_0x127130[_0xa00b63(0x276)],(gameOver=_0x127130[_0xa00b63(0x204)])?endGame:initGame):loadPuzzles)();}function saveGameState(){var _0x263ff0=_0xef3b18,_0x34b63d={'friDj':_0x263ff0(0x238)},_0xe6c144={'score':score,'currentPuzzleIndex':currentPuzzleIndex,'puzzlesSolved':puzzlesSolved,'puzzles':puzzles,'gameOver':gameOver};localStorage['setItem'](_0x34b63d['friDj'],JSON[_0x263ff0(0x21d)](_0xe6c144));}function clearGameState(){var _0x151101=_0xef3b18,_0x2919e2={'iQHie':'emojifyGameState'};localStorage[_0x151101(0x1bd)](_0x2919e2['iQHie']);}function startGame(){var _0x14e66f=_0xef3b18,_0x4fa7ac={'MYNVM':_0x14e66f(0x225),'fyDKe':_0x14e66f(0x1da),'qcCUK':_0x14e66f(0x24e),'uSdfG':function(_0x48b8f7){return _0x48b8f7();},'BhUaz':function(_0x312d36){return _0x312d36();}};document[_0x14e66f(0x239)](_0x4fa7ac[_0x14e66f(0x236)])[_0x14e66f(0x1d5)][_0x14e66f(0x1c6)](_0x4fa7ac[_0x14e66f(0x1f4)]),document[_0x14e66f(0x239)](_0x4fa7ac[_0x14e66f(0x233)])[_0x14e66f(0x1d5)][_0x14e66f(0x1d2)](_0x14e66f(0x1da)),score=0x64,guessedLetters=[],incorrectGuesses=0x0,currentPuzzleIndex=0x0,puzzlesSolved=0x0,gameOver=!0x1,_0x4fa7ac['uSdfG'](clearGameState),_0x4fa7ac[_0x14e66f(0x21f)](loadPuzzles);}async function loadPuzzles(){var _0x97e3d4=_0xef3b18,_0x574f1a={'fpKFT':function(_0x50b84f){return _0x50b84f();},'iYild':function(_0x2c28fd,_0x55f7f1){return _0x2c28fd!==_0x55f7f1;},'SRHMh':'No\x20puzzles\x20available\x20for\x20today.'};(puzzles=await _0x574f1a[_0x97e3d4(0x1ff)](fetchPuzzles))&&_0x574f1a[_0x97e3d4(0x21b)](0x0,puzzles[_0x97e3d4(0x1e1)])?initGame():alert(_0x574f1a[_0x97e3d4(0x249)]);}function initGame(){var _0x432c28=_0xef3b18,_0x1c8c5a={'UEBEv':function(_0x3858c4,_0x5cbf2f){return _0x3858c4<_0x5cbf2f;},'YyRvU':_0x432c28(0x1f2),'BwSKd':function(_0xc580de,_0x1aea01){return _0xc580de+_0x1aea01;},'xJKUI':'letter-','wYAqv':_0x432c28(0x1b6),'LafXw':_0x432c28(0x1c9),'pcZBG':function(_0x679f36,_0x5783ce){return _0x679f36>=_0x5783ce;},'AScXt':function(_0x3afa17){return _0x3afa17();},'XaQlT':_0x432c28(0x248),'pSRsK':_0x432c28(0x1c8),'akjyl':function(_0x12ccf1,_0x2f0aec){return _0x12ccf1+_0x2f0aec;},'rvwsU':'feedback','kWAbW':_0x432c28(0x271),'cTLbH':_0x432c28(0x273),'BHkwM':_0x432c28(0x220),'DjSmJ':_0x432c28(0x223),'qzpJD':_0x432c28(0x1fb),'yDHfN':function(_0x1235ba){return _0x1235ba();}};if(_0x1c8c5a['pcZBG'](currentPuzzleIndex,puzzles['length'])||puzzlesSolved>=totalPuzzlesPerDay||score<=0x0)_0x1c8c5a[_0x432c28(0x23c)](endGame);else{puzzleData=puzzles[currentPuzzleIndex];var _0x44768e=document[_0x432c28(0x239)](_0x1c8c5a[_0x432c28(0x24f)]);let _0x1a66f6=document[_0x432c28(0x239)](_0x1c8c5a[_0x432c28(0x211)]);guessedLetters=[],incorrectGuesses=0x0;var _0x3204bf=document['getElementById']('category-hashtag');_0x3204bf[_0x432c28(0x1de)]=_0x1c8c5a[_0x432c28(0x1fc)]('#',puzzleData[_0x432c28(0x243)]),_0x3204bf['textContent']=_0x3204bf[_0x432c28(0x1de)][_0x432c28(0x222)](),_0x44768e[_0x432c28(0x1fe)]=puzzleData[_0x432c28(0x20a)],_0x1c8c5a[_0x432c28(0x23c)](updateScoreDisplay),document[_0x432c28(0x239)](_0x1c8c5a['rvwsU'])[_0x432c28(0x1fe)]='',document[_0x432c28(0x239)](_0x1c8c5a['kWAbW'])[_0x432c28(0x234)]='',document['querySelector'](_0x1c8c5a[_0x432c28(0x267)])['classList'][_0x432c28(0x1c6)]('hidden'),document['getElementById'](_0x1c8c5a[_0x432c28(0x1b4)])[_0x432c28(0x1d5)][_0x432c28(0x1c6)](_0x432c28(0x1da)),(document[_0x432c28(0x239)](_0x1c8c5a[_0x432c28(0x26f)])[_0x432c28(0x213)]=!0x1,_0x1a66f6[_0x432c28(0x234)]=''),_0x3204bf=puzzleData[_0x432c28(0x25c)][_0x432c28(0x242)]('\x20');let _0x57d4a7=0x0;_0x3204bf[_0x432c28(0x245)](_0x42a14b=>{var _0x42404d=_0x432c28,_0x194bab=document[_0x42404d(0x263)](_0x42404d(0x1f2));_0x194bab[_0x42404d(0x1d5)][_0x42404d(0x1c6)](_0x42404d(0x215));for(let _0x3633ec=0x0;_0x1c8c5a['UEBEv'](_0x3633ec,_0x42a14b[_0x42404d(0x1e1)]);_0x3633ec++){var _0x3d34db=_0x42a14b[_0x3633ec],_0x309f48=document[_0x42404d(0x263)](_0x1c8c5a[_0x42404d(0x259)]);_0x3d34db[_0x42404d(0x1db)](/[A-Za-z]/)?(_0x309f48[_0x42404d(0x1d5)][_0x42404d(0x1c6)](_0x42404d(0x1d1)),_0x309f48[_0x42404d(0x21e)]('id',_0x1c8c5a[_0x42404d(0x274)](_0x1c8c5a['xJKUI'],_0x57d4a7))):(_0x309f48[_0x42404d(0x1d5)][_0x42404d(0x1c6)](_0x42404d(0x1d1),_0x1c8c5a[_0x42404d(0x217)]),_0x309f48[_0x42404d(0x1fe)]=_0x3d34db),_0x194bab[_0x42404d(0x205)](_0x309f48),_0x57d4a7++;}_0x1a66f6[_0x42404d(0x205)](_0x194bab);}),document[_0x432c28(0x272)](_0x1c8c5a[_0x432c28(0x21c)],handleKeyPress),document['addEventListener'](_0x1c8c5a[_0x432c28(0x21c)],handleKeyPress),document[_0x432c28(0x239)](_0x1c8c5a[_0x432c28(0x1f7)])['addEventListener'](_0x432c28(0x20b),()=>{var _0x24b22e=_0x432c28;document[_0x24b22e(0x239)](_0x1c8c5a[_0x24b22e(0x26f)])[_0x24b22e(0x237)]();}),document[_0x432c28(0x239)](_0x1c8c5a[_0x432c28(0x26f)])[_0x432c28(0x1d0)](_0x432c28(0x1f5),handleMobileInput),puzzleStartTime=Date[_0x432c28(0x25b)](),_0x1c8c5a[_0x432c28(0x260)](startTimePenalty),saveGameState();}}async function fetchPuzzles(){var _0xb700ab=_0xef3b18,_0x2c0f35={'VKpUA':function(_0x2b867a,_0x296071){return _0x2b867a(_0x296071);},'kosZC':function(_0x3a23ed,_0x39f023){return _0x3a23ed(_0x39f023);},'qJSKN':_0xb700ab(0x246)};try{let _0x5d828d=new Date()[_0xb700ab(0x26c)]()['split']('T')[0x0];var _0x417058;return(isDev?samplePuzzles:(_0x417058=_0x2c0f35['VKpUA'](base64DecodeUnicode,await(await _0x2c0f35['kosZC'](fetch,_0xb700ab(0x200)))[_0xb700ab(0x23e)]()),JSON[_0xb700ab(0x202)](_0x417058)[_0xb700ab(0x276)][_0xb700ab(0x270)](_0x3a369a=>_0x3a369a[_0xb700ab(0x1b5)]===_0x5d828d)))['slice'](0x0,totalPuzzlesPerDay);}catch(_0x958e08){return console[_0xb700ab(0x24c)](_0x2c0f35[_0xb700ab(0x25e)],_0x958e08),[];}}function base64DecodeUnicode(_0x1b0a04){var _0x14b5fa=_0xef3b18,_0x3633ee={'xErIX':function(_0x3503b8,_0x136747){return _0x3503b8<_0x136747;}},_0x1e2ffc=atob(_0x1b0a04),_0x1128c5=new Uint8Array(_0x1e2ffc[_0x14b5fa(0x1e1)]);for(let _0x4118b7=0x0;_0x3633ee[_0x14b5fa(0x1f1)](_0x4118b7,_0x1e2ffc[_0x14b5fa(0x1e1)]);_0x4118b7++)_0x1128c5[_0x4118b7]=_0x1e2ffc[_0x14b5fa(0x1ef)](_0x4118b7);return new TextDecoder()[_0x14b5fa(0x1cf)](_0x1128c5);}function handleKeyPress(_0x47f1be){var _0x5bd8f2=_0xef3b18,_0x5ccdcc={'WVBmL':function(_0x51c150,_0x3c3c16){return _0x51c150(_0x3c3c16);}};_0x5ccdcc[_0x5bd8f2(0x219)](processGuess,_0x47f1be[_0x5bd8f2(0x1d7)]['toUpperCase']());}function handleMobileInput(_0x275ed1){var _0x364ff1=_0xef3b18,_0x275ed1=_0x275ed1['target'],_0x29037e=_0x275ed1['value'][_0x364ff1(0x27a)]();_0x275ed1[_0x364ff1(0x1be)]='',processGuess(_0x29037e);}function processGuess(_0x28686e){var _0x4d5300=_0xef3b18,_0x581390={'mkKGg':_0x4d5300(0x22b),'lOPXW':function(_0xe32f61,_0x23dee4){return _0xe32f61(_0x23dee4);},'HwIZW':function(_0x5f0a09){return _0x5f0a09();},'GPXso':function(_0x56e5dc,_0x378291){return _0x56e5dc(_0x378291);},'HyGei':'.incorrect-guesses'},_0x2965ad=document[_0x4d5300(0x239)](_0x4d5300(0x1dc));0x1===_0x28686e[_0x4d5300(0x1e1)]&&_0x28686e[_0x4d5300(0x1db)](/[A-Z'&\-]/i)&&(guessedLetters[_0x4d5300(0x221)](_0x28686e)?_0x2965ad[_0x4d5300(0x1fe)]=_0x581390['mkKGg']:(guessedLetters[_0x4d5300(0x20e)](_0x28686e),puzzleData[_0x4d5300(0x25c)]['toUpperCase']()[_0x4d5300(0x221)](_0x28686e)?(_0x581390['lOPXW'](fillInLetters,_0x28686e),_0x581390[_0x4d5300(0x277)](displayEmojiFeedback,!0x0),_0x581390['HwIZW'](isPuzzleSolved)&&(_0x581390['lOPXW'](clearInterval,timePenaltyInterval),_0x581390['HwIZW'](displayCongratulations),puzzlesSolved++,showInfoSection())):(incorrectGuesses++,_0x581390[_0x4d5300(0x201)](updateScore,-0x1),_0x581390[_0x4d5300(0x277)](displayEmojiFeedback,!0x1),displayWrongLetter(_0x28686e),document[_0x4d5300(0x266)](_0x581390[_0x4d5300(0x1ed)])[_0x4d5300(0x1d5)]['remove']('hidden'),score<=0x0&&_0x581390[_0x4d5300(0x227)](endGame))));}function displayCongratulations(){var _0x2a742a=_0xef3b18,_0x20e17a={'ltGSC':_0x2a742a(0x1dc),'JbXCs':_0x2a742a(0x24a),'Crcri':function(_0x5e56ca,_0x249644){return _0x5e56ca*_0x249644;},'MSNTW':'Congratulations!\x20You\x20solved\x20the\x20puzzle!\x20'},_0x64ca51=document[_0x2a742a(0x239)](_0x20e17a[_0x2a742a(0x1e0)]),_0x1559e3=(_0x64ca51[_0x2a742a(0x1d5)][_0x2a742a(0x1c6)](_0x20e17a[_0x2a742a(0x1eb)]),celebrationEmojis[Math[_0x2a742a(0x1e2)](_0x20e17a[_0x2a742a(0x1f6)](Math[_0x2a742a(0x1fd)](),celebrationEmojis[_0x2a742a(0x1e1)]))]);_0x64ca51[_0x2a742a(0x1fe)]=_0x20e17a[_0x2a742a(0x256)]+_0x1559e3;}function displayEmojiFeedback(_0x724ed2){var _0x5b0a1e=_0xef3b18,_0x50d5b0={'gVukA':_0x5b0a1e(0x1dc)},_0x2026c4=document[_0x5b0a1e(0x239)](_0x50d5b0[_0x5b0a1e(0x250)]),_0x724ed2=_0x724ed2?correctEmojis:incorrectEmojis,_0x724ed2=_0x724ed2[Math[_0x5b0a1e(0x1e2)](Math[_0x5b0a1e(0x1fd)]()*_0x724ed2[_0x5b0a1e(0x1e1)])];_0x2026c4['innerText']=_0x724ed2;}function fillInLetters(_0x388f92){var _0x3cf137=_0xef3b18,_0xe90696={'PfAQi':function(_0x3b015f,_0x19beff){return _0x3b015f<_0x19beff;},'DFyJx':function(_0x452334,_0x36f0a9){return _0x452334+_0x36f0a9;},'llMTz':'letter-','JZlrJ':_0x3cf137(0x1b8)};let _0x5d3054=0x0;puzzleData['answer'][_0x3cf137(0x242)]('\x20')[_0x3cf137(0x245)](_0x84a339=>{var _0x148294=_0x3cf137;for(let _0x12c2eb=0x0;_0xe90696[_0x148294(0x208)](_0x12c2eb,_0x84a339['length']);_0x12c2eb++){var _0x3553e0;_0x84a339[_0x12c2eb][_0x148294(0x27a)]()===_0x388f92&&(_0x3553e0=document['getElementById'](_0xe90696[_0x148294(0x25f)](_0xe90696['llMTz'],_0x5d3054)))&&(_0x3553e0[_0x148294(0x1fe)]=_0x84a339[_0x12c2eb],_0x3553e0[_0x148294(0x1d5)][_0x148294(0x1c6)](_0xe90696[_0x148294(0x1dd)])),_0x5d3054++;}});}function isPuzzleSolved(){var _0xae5da7=_0xef3b18,_0x4ddeae={'IznUj':function(_0x348732,_0x5737d){return _0x348732<_0x5737d;},'tmVSc':function(_0x3db219,_0x4b1038){return _0x3db219+_0x4b1038;}};let _0x53ea10=0x0;var _0xafacfb;for(_0xafacfb of puzzleData['answer'][_0xae5da7(0x242)]('\x20'))for(let _0x5b37ba=0x0;_0x4ddeae['IznUj'](_0x5b37ba,_0xafacfb['length']);_0x5b37ba++){var _0x3463d6=_0xafacfb[_0x5b37ba],_0x4615b7=document[_0xae5da7(0x239)](_0x4ddeae[_0xae5da7(0x1e7)](_0xae5da7(0x229),_0x53ea10));if(_0x4615b7&&''===_0x4615b7['innerText']&&_0x3463d6[_0xae5da7(0x1db)](/[A-Za-z]/))return!0x1;_0x53ea10++;}return!0x0;}function updateScore(_0x102e42){var _0x32adaf=_0xef3b18,_0x155f02={'oRTMu':function(_0x353f25,_0x48c511){return _0x353f25<_0x48c511;},'CDbRy':function(_0x5127d6){return _0x5127d6();}};_0x155f02['oRTMu'](score+=_0x102e42,0x0)&&(score=0x0),_0x155f02[_0x32adaf(0x23b)](updateScoreDisplay),_0x155f02[_0x32adaf(0x23b)](saveGameState);}function updateScoreDisplay(){var _0x20ffb4=_0xef3b18,_0x41bbb4={'nknJx':_0x20ffb4(0x252),'NUsaF':function(_0x252f4c,_0xfd368a){return _0x252f4c*_0xfd368a;},'UuFiI':function(_0x364488,_0x4d0e34){return _0x364488-_0x4d0e34;},'bejlP':function(_0x3cdc9f,_0x5c1575){return _0x3cdc9f*_0x5c1575;},'VcnQS':function(_0x1d07ad,_0x39c33a){return _0x1d07ad/_0x39c33a;},'mArTQ':function(_0x259b77,_0x1bfb2c){return _0x259b77(_0x1bfb2c);}};document[_0x20ffb4(0x239)]('score-text')[_0x20ffb4(0x1de)]=score;var _0x1815e4=document['querySelector'](_0x41bbb4['nknJx']),_0x20dc7c=_0x41bbb4[_0x20ffb4(0x207)](_0x41bbb4['NUsaF'](0x2,Math['PI']),0x2d),_0xa4efd4=_0x41bbb4[_0x20ffb4(0x24d)](_0x20dc7c,_0x41bbb4[_0x20ffb4(0x23d)](_0x41bbb4['VcnQS'](score,0x64),_0x20dc7c)),_0x20dc7c=(_0x1815e4[_0x20ffb4(0x258)][_0x20ffb4(0x1fa)]=_0x20dc7c,_0x1815e4['style'][_0x20ffb4(0x231)]=_0xa4efd4,_0x41bbb4[_0x20ffb4(0x1d8)](getColor,score));_0x1815e4['style'][_0x20ffb4(0x203)]=_0x20dc7c;}function getColor(_0x19116d){var _0x5917fd=_0xef3b18,_0x285d4f={'YgoSW':function(_0x4ac08d,_0x5d8e2c){return _0x4ac08d+_0x5d8e2c;},'iLQse':function(_0x46ccc9,_0x269b7c){return _0x46ccc9*_0x269b7c;},'yRORx':function(_0x263705,_0x2e9fbd){return _0x263705*_0x2e9fbd;},'CQMix':function(_0xe11340,_0x57fd84){return _0xe11340-_0x57fd84;},'Bdqtf':function(_0x53ae00,_0x25c18f){return _0x53ae00*_0x25c18f;}};const _0x2c7239=0x0,_0x25853f=0x7b,_0x2f7d51=0xff,_0x497166=0x0,_0x423a91=0xbd,_0x30f91e=0xd2;return _0x19116d/=0x64,_0x5917fd(0x1bb)+Math[_0x5917fd(0x241)](_0x285d4f[_0x5917fd(0x216)](_0x497166,_0x285d4f[_0x5917fd(0x20f)](_0x2c7239-_0x497166,_0x19116d)))+',\x20'+Math[_0x5917fd(0x241)](_0x423a91+_0x285d4f[_0x5917fd(0x26d)](_0x285d4f[_0x5917fd(0x228)](_0x25853f,_0x423a91),_0x19116d))+',\x20'+Math['round'](_0x30f91e+_0x285d4f['Bdqtf'](_0x2f7d51-_0x30f91e,_0x19116d))+')';}function _0x3935(){var _0x52ff3c=['special-character','getFullYear','filled-letter','getItem','The\x20Lion\x20King\x20is\x20a\x201994\x20animated\x20Disney\x20film\x20about\x20a\x20lion\x20cub\x27s\x20journey\x20to\x20adulthood\x20and\x20acceptance\x20of\x20his\x20royal\x20destiny.','rgb(','322721gTUAZh','removeItem','value','ZCktD','UGNOL','getMonth','NCeIO','heThJ','final-score','YQDSo','add','1479747jzAqIu','blanks-container','hidden-input','span','link','music','current-date','https://www.facebook.com/sharer/sharer.php?u=','decode','addEventListener','blank-letter','remove','LgDjQ','game-over-screen','classList','preventDefault','key','mArTQ','1628774NqYrxP','hidden','match','feedback','JZlrJ','textContent','contains','ltGSC','length','floor','25247043pTLgNT','ULELb','156UHFsxM','yMsbQ','tmVSc','padStart','CHJeM','\x27Eye\x20of\x20the\x20Tiger\x27\x20is\x20a\x20song\x20by\x20American\x20rock\x20band\x20Survivor,\x20released\x20in\x201982.','JbXCs','JwghJ','HyGei','https://api.whatsapp.com/send?text=','charCodeAt','DtCGB','xErIX','div','bsKzb','fyDKe','input','Crcri','qzpJD','acBoq','StRRJ','strokeDasharray','puzzle-section','akjyl','random','innerText','fpKFT','https://raw.githubusercontent.com/yourusername/yourrepo/main/puzzles.json','GPXso','parse','stroke','gameOver','appendChild','slice','NUsaF','PfAQi','103389DIZqVM','puzzle','click','10yJoOiC','obTgW','push','iLQse','152rcAyYs','pSRsK','mbydW','disabled','VVxLz','word-container','YgoSW','wYAqv','href','WVBmL','PFGxt','iYild','DjSmJ','stringify','setAttribute','BhUaz','info-section','includes','toLowerCase','keydown','6174170RjsvYE','start-screen','wrong-letter','HwIZW','CQMix','letter-','puzzlesSolved','You\x20already\x20guessed\x20that\x20letter.','Qgzfq','getDate','naBuV','rjzms','&quote=','strokeDashoffset','https://en.wikipedia.org/wiki/Stranger_Things','qcCUK','innerHTML','createTextNode','MYNVM','focus','emojifyGameState','getElementById','#007bff','CDbRy','AScXt','bejlP','text','👁️🐅','target','round','split','category','https://twitter.com/intent/tweet?text=','forEach','Error\x20fetching\x20puzzles:','xWwij','emoji-puzzle','SRHMh','congratulations','TOGKw','error','UuFiI','game-screen','XaQlT','gVukA','GeOks','.progress-bar','THE\x20LION\x20KING','kYaiA','\x20points\x20on\x20emojify!\x20Can\x20you\x20beat\x20my\x20score?','MSNTW','ILTnh','style','YyRvU','currentPuzzleIndex','now','answer','8674626vMtAaO','qJSKN','DFyJx','yDHfN','uJsWF','info-link','createElement','NKUWa','FeDZi','querySelector','cTLbH','UPdXK','Ishhy','Stranger\x20Things\x20is\x20a\x20Netflix\x20series\x20set\x20in\x20the\x201980s,\x20focusing\x20on\x20supernatural\x20events\x20in\x20the\x20fictional\x20town\x20of\x20Hawkins.','eVaQE','toISOString','yRORx','info','LafXw','filter','wrong-letters','removeEventListener','.incorrect-guesses','BwSKd','share-facebook','puzzles','lOPXW','I\x20scored\x20','share-twitter','toUpperCase','RCPQi','#more','2023-09-24','share-whatsapp','movies','IjhbF','load','SiNKV','BHkwM','date'];_0x3935=function(){return _0x52ff3c;};return _0x3935();}function startTimePenalty(){var _0x45deab=_0xef3b18,_0x2087fb={'rjzms':function(_0x3e0809,_0x251b5d){return _0x3e0809-_0x251b5d;},'DtCGB':function(_0x1d93fc,_0x1e1e16){return _0x1d93fc>_0x1e1e16;},'UGNOL':function(_0x5f3f23,_0x48212c){return _0x5f3f23(_0x48212c);},'IjhbF':function(_0x516da9,_0x323e58){return _0x516da9>=_0x323e58;},'ULELb':function(_0x35b533,_0x116a86){return _0x35b533<=_0x116a86;},'CHJeM':function(_0x3b8432,_0x3154c2,_0xb47435){return _0x3b8432(_0x3154c2,_0xb47435);}};timePenaltyInterval=_0x2087fb[_0x45deab(0x1e9)](setInterval,()=>{var _0x4704ff=_0x45deab,_0x386bbc=Math[_0x4704ff(0x1e2)](_0x2087fb[_0x4704ff(0x22f)](Date[_0x4704ff(0x25b)](),puzzleStartTime)/0x3e8);_0x2087fb[_0x4704ff(0x1f0)](_0x386bbc,timeLimitPerPuzzle)&&((_0x386bbc=_0x2087fb[_0x4704ff(0x22f)](_0x386bbc,timeLimitPerPuzzle))<=maxTimePenaltyPerPuzzle&&_0x2087fb[_0x4704ff(0x1c0)](updateScore,-0x1),_0x2087fb[_0x4704ff(0x280)](_0x386bbc,maxTimePenaltyPerPuzzle)||_0x2087fb[_0x4704ff(0x1e4)](score,0x0))&&clearInterval(timePenaltyInterval);},0x3e8);}function revealAnswer(){var _0x5c86a8=_0xef3b18,_0x391bb6={'Qgzfq':function(_0x36747d,_0x3cc9ae){return _0x36747d<_0x3cc9ae;},'UPdXK':_0x5c86a8(0x229),'ABzjx':_0x5c86a8(0x1b8)};let _0x13005f=0x0;var _0x1837f2;for(_0x1837f2 of puzzleData['answer'][_0x5c86a8(0x242)]('\x20'))for(let _0x15a88a=0x0;_0x391bb6[_0x5c86a8(0x22c)](_0x15a88a,_0x1837f2[_0x5c86a8(0x1e1)]);_0x15a88a++){var _0x1a7b9=_0x1837f2[_0x15a88a],_0x38f9bc=document[_0x5c86a8(0x239)](_0x391bb6[_0x5c86a8(0x268)]+_0x13005f);_0x38f9bc&&''===_0x38f9bc[_0x5c86a8(0x1fe)]&&_0x1a7b9[_0x5c86a8(0x1db)](/[A-Za-z]/)&&(_0x38f9bc[_0x5c86a8(0x1fe)]=_0x1a7b9,_0x38f9bc[_0x5c86a8(0x1d5)]['add'](_0x391bb6['ABzjx'])),_0x13005f++;}}function showInfoSection(){var _0x5d72e2=_0xef3b18,_0x188dd3={'ZCktD':_0x5d72e2(0x220),'FWzaQ':function(_0x4ad1f8,_0x1ec8ac){return _0x4ad1f8+_0x1ec8ac;},'acBoq':_0x5d72e2(0x262),'TQBIT':'_blank','StRRJ':_0x5d72e2(0x27c),'SiNKV':_0x5d72e2(0x23a),'EgsFJ':_0x5d72e2(0x1da),'GeOks':'hidden-input','yMsbQ':_0x5d72e2(0x223),'uJsWF':_0x5d72e2(0x1f5),'lhpcU':function(_0x2b38a9,_0x77e7a){return _0x2b38a9(_0x77e7a);},'heThJ':function(_0x411469){return _0x411469();}},_0x3e126f=document[_0x5d72e2(0x239)](_0x188dd3[_0x5d72e2(0x1bf)]),_0x4c62d4=document['getElementById']('info-text'),_0x544d06=(_0x4c62d4['innerHTML']='',document[_0x5d72e2(0x235)](_0x188dd3['FWzaQ'](puzzleData[_0x5d72e2(0x26e)],'\x20'))),_0xa7e7e2=document[_0x5d72e2(0x263)]('a');_0xa7e7e2['id']=_0x188dd3[_0x5d72e2(0x1f8)],_0xa7e7e2['href']=puzzleData[_0x5d72e2(0x1cb)],_0xa7e7e2[_0x5d72e2(0x240)]=_0x188dd3['TQBIT'],_0xa7e7e2[_0x5d72e2(0x1de)]=_0x188dd3[_0x5d72e2(0x1f9)],_0xa7e7e2['style']['color']=_0x188dd3[_0x5d72e2(0x1b3)],_0x4c62d4[_0x5d72e2(0x205)](_0x544d06),_0x4c62d4['appendChild'](_0xa7e7e2),_0x3e126f[_0x5d72e2(0x1d5)][_0x5d72e2(0x1d2)](_0x188dd3['EgsFJ']),document[_0x5d72e2(0x239)](_0x188dd3[_0x5d72e2(0x251)])[_0x5d72e2(0x213)]=!0x0,document[_0x5d72e2(0x272)](_0x188dd3[_0x5d72e2(0x1e6)],handleKeyPress),document[_0x5d72e2(0x239)](_0x188dd3[_0x5d72e2(0x251)])['removeEventListener'](_0x188dd3[_0x5d72e2(0x261)],handleMobileInput),_0x188dd3['lhpcU'](clearInterval,timePenaltyInterval),_0x188dd3[_0x5d72e2(0x1c3)](saveGameState);}function endGame(){var _0x4b2295=_0xef3b18,_0x4209d3={'yEoxh':function(_0x528fc0,_0x2418fc){return _0x528fc0(_0x2418fc);},'lRTaG':'keydown','LgDjQ':'hidden-input','mbydW':_0x4b2295(0x1f5),'ILTnh':_0x4b2295(0x1fb),'YQDSo':_0x4b2295(0x1da),'eVaQE':_0x4b2295(0x1c4),'VVxLz':function(_0x42b61c,_0x26640e){return _0x42b61c(_0x26640e);},'naBuV':_0x4b2295(0x279),'PFGxt':function(_0x2b733a,_0x2b2520){return _0x2b733a+_0x2b2520;},'xWwij':_0x4b2295(0x275),'obTgW':_0x4b2295(0x27e),'Ishhy':function(_0x2ea7fe,_0x35a25c){return _0x2ea7fe+_0x35a25c;},'bsKzb':function(_0x1f1f4e){return _0x1f1f4e();}};gameOver=!0x0,_0x4209d3['yEoxh'](clearInterval,timePenaltyInterval),document[_0x4b2295(0x272)](_0x4209d3['lRTaG'],handleKeyPress),document['getElementById'](_0x4209d3[_0x4b2295(0x1d3)])[_0x4b2295(0x272)](_0x4209d3[_0x4b2295(0x212)],handleMobileInput),(document['getElementById'](_0x4209d3[_0x4b2295(0x1d3)])[_0x4b2295(0x213)]=!0x0,document[_0x4b2295(0x239)](_0x4209d3[_0x4b2295(0x257)])[_0x4b2295(0x1d5)]['add'](_0x4209d3[_0x4b2295(0x1c5)]),document[_0x4b2295(0x239)](_0x4b2295(0x220))[_0x4b2295(0x1d5)][_0x4b2295(0x1c6)](_0x4209d3[_0x4b2295(0x1c5)]),document[_0x4b2295(0x239)](_0x4b2295(0x1d4))[_0x4b2295(0x1d5)][_0x4b2295(0x1d2)](_0x4209d3[_0x4b2295(0x1c5)]),document['getElementById'](_0x4209d3[_0x4b2295(0x26b)])[_0x4b2295(0x1fe)]=score);var _0x5383eb=_0x4209d3[_0x4b2295(0x214)](encodeURIComponent,_0x4b2295(0x278)+score+_0x4b2295(0x255)),_0x38864c=encodeURIComponent(window['location'][_0x4b2295(0x218)]);document[_0x4b2295(0x239)](_0x4209d3[_0x4b2295(0x22e)])['href']=_0x4209d3[_0x4b2295(0x21a)](_0x4b2295(0x244)+_0x5383eb+'&url=',_0x38864c),document[_0x4b2295(0x239)](_0x4209d3[_0x4b2295(0x247)])[_0x4b2295(0x218)]=_0x4b2295(0x1ce)+_0x38864c+_0x4b2295(0x230)+_0x5383eb,document[_0x4b2295(0x239)](_0x4209d3[_0x4b2295(0x20d)])[_0x4b2295(0x218)]=_0x4209d3[_0x4b2295(0x269)](_0x4b2295(0x1ee)+_0x5383eb+'\x20',_0x38864c),_0x4209d3[_0x4b2295(0x1f3)](clearGameState);}function _0x4d53(_0x1440f7,_0x4ce517){var _0x393568=_0x3935();return _0x4d53=function(_0x4d5322,_0x198848){_0x4d5322=_0x4d5322-0x1b2;var _0x47978d=_0x393568[_0x4d5322];return _0x47978d;},_0x4d53(_0x1440f7,_0x4ce517);}function displayWrongLetter(_0x500451){var _0x31f3a1=_0xef3b18,_0x36fd84={'JwghJ':'wrong-letters','FeDZi':_0x31f3a1(0x226)},_0x156f3b=document['getElementById'](_0x36fd84[_0x31f3a1(0x1ec)]),_0x15e405=document[_0x31f3a1(0x263)](_0x31f3a1(0x1ca));_0x15e405[_0x31f3a1(0x1d5)][_0x31f3a1(0x1c6)](_0x36fd84[_0x31f3a1(0x265)]),_0x15e405['innerText']=_0x500451,_0x156f3b[_0x31f3a1(0x205)](_0x15e405);}function displayCurrentDate(){var _0x2a407a=_0xef3b18,_0x1fba88={'qfwzt':_0x2a407a(0x1cd),'RCPQi':function(_0x3bee71,_0x341ffc){return _0x3bee71(_0x341ffc);},'NKUWa':function(_0x5d00c7,_0x2fa658){return _0x5d00c7+_0x2fa658;}},_0x1db8ba=document[_0x2a407a(0x239)](_0x1fba88['qfwzt']),_0x5cd0fd=new Date(),_0x4ce471=_0x1fba88[_0x2a407a(0x27b)](String,_0x5cd0fd[_0x2a407a(0x22d)]())['padStart'](0x2,'0'),_0x16f2f7=_0x1fba88['RCPQi'](String,_0x1fba88[_0x2a407a(0x264)](_0x5cd0fd[_0x2a407a(0x1c1)](),0x1))[_0x2a407a(0x1e8)](0x2,'0'),_0x5cd0fd=_0x1fba88['RCPQi'](String,_0x5cd0fd[_0x2a407a(0x1b7)]())[_0x2a407a(0x206)](-0x2);_0x1db8ba[_0x2a407a(0x1fe)]=_0x4ce471+('.'+_0x16f2f7+'.')+_0x5cd0fd;}document[_0xef3b18(0x239)]('startgame')['addEventListener'](_0xef3b18(0x20b),_0x138ea7=>{var _0x14e4d3=_0xef3b18;_0x138ea7[_0x14e4d3(0x1d6)](),startGame();}),document['getElementById']('next')['addEventListener'](_0xef3b18(0x20b),_0x4cf12f=>{var _0x561483={'SaBrB':function(_0xc7bbe4){return _0xc7bbe4();}};_0x4cf12f['preventDefault'](),currentPuzzleIndex++,_0x561483['SaBrB'](initGame);}),displayCurrentDate(),window[_0xef3b18(0x1d0)](_0xef3b18(0x1b2),()=>{var _0x486d7d=_0xef3b18,_0x2af55b={'NCeIO':'start-screen','XWkod':_0x486d7d(0x1da),'TOGKw':function(_0x4857bf){return _0x4857bf();}};document[_0x486d7d(0x239)](_0x2af55b[_0x486d7d(0x1c2)])['classList'][_0x486d7d(0x1df)](_0x2af55b['XWkod'])&&_0x2af55b[_0x486d7d(0x24b)](loadGameState);});