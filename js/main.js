$(function(){

	var app = {
		currentScreen : 1,
		selectedCardArray : [],
		animationCardArray : [],
		mobile: false,
		characters: {
	        "0": {
	        	"fname": "major-0",
	            "title": "The Fool",
				'text': "The Fool takes a creative approach to relationships. His carefree demeanor can be refreshing, but it's not always stable. If you're the fool, you're at risk of being overly influenced by those around you. If your partner is the fool, you may find that they don't fully appreciate what they have and approach love from a place of lightheartedness and immaturity.",
	            "descriptions": {
	                "0": "The Fool is currently encouraging you to try a fresh approach to love. If you're single, try looking in new places. If you're in a relationship, it's time to take a risk, either letting go of your relationship or trying a bold move to take things deeper.",
	                "1": "The Fool in this position is telling you that you're carrying a fear of commitment and stability with you. This is influenced by pain that you've experienced in a past relationship.",
	                "2": "The Fool here is trying to teach you a lesson. You may have lost your wits to love in the past, but this time you need to keep them about you. Don't lose your head in love — keep your feet on the ground while appreciating what you have.",
	                "3": "The Fool is letting you know that your partner needs a fresh, playful approach to your relationship right now. Try something new, even at the risk of embarrassing yourself. They'll appreciate you for it.",
	                "4": "The Fool is telling you that your partner takes an immature approach to relationships. They are likely to be flighty and may be afraid of commitment due to pain they've suffered in the past.",
	                "5": "Your partner is the target of the card here, standing in the place of the whimsical Fool. They are likely confused about who they really are and struggling to reach a place of maturity in your relationship.",
					"6": "In this position, the Fool represents the energy between yourself and your partner. You have a fun, playful relationship, but it hasn't moved to a deeper level yet. You'll need to examine your feelings carefully to decide if this is something you want."
	            }
	        },
	        "1": {
	        	"fname": "major-1",
	            "title": "The Magician",
				'text': "The Magician represents new opportunities, resourcefulness, and inspiration. Smart and capable, the Magician indicates a strong relationship where you're free to be yourself because what you are is exactly enough for this partner. While this type of relationship is incredibly strong, it can also be all-consuming, which is something you should watch out for.",
	            "descriptions": {
	                "0": "In this position, the Magician indicates that you're looking for a deep partnership rooted in trust and stability. It's time for you to grow into all that you could be, reaching your full potential and fulfilling your greatest destiny. Accept nothing less than a partner who supports this.",
	                "1": "The Magician here is speaking about your baggage from a past relationship. You may have let the seeming perfection of a previous love consume your life to an unhealthy extent. Watch out for this tendency in the future.",
	                "2": "The Magician here is representative of your own personal strengths. You like to be involved in projects that are bigger yourself, working within the community to make a meaningful change. Your experience coordinating those projects helps you see the value that different personalities can bring to a relationship.",
	                "3": "Here, the Magician speaks to what your partner needs. They are looking for a solid partnership where you both feel confident about who you are. Take time to find yourself if you're on unstable footing.",
	                "4": "This position speaks about your partner's past. They likely had a relationship that seemed nearly perfect, but it consumed them and ultimately failed because of the deep codependency. This history may test your current relationship.",
	                "5": "The Magician in this position represents your partner's strengths. They are deeply involved in the community and personal projects. Don't try to take over too much of their time, as these pursuits are an important part of who they are.",
					"6": "In this position, the Magician indicates that you currently have or will soon find this type of deep bond. Make sure that you both engage in self-care and individual pursuits, so the passion and depth of this relationship don't diminish your individuality."
	            }
	        },
	        "2": {
	        	"fname": "major-2",
	            "title": "The High Priestess",
				'text': "The High Priestess is a mysterious character who may not know herself well enough to reach her full potential. This card represents deep intellectual pursuits, sacred knowledge, and the subconscious mind. While the Priestess usually indicates a strong and faithful relationship, she is not a particularly passionate character, which may highlight something that's missing in your partnership.",
	            "descriptions": {
	                "0": "In this position, the High Priestess indicates that you need a more intellectual bond with your partner. Trust your intuition if something seems wrong. It may be that you don't have the type of connection you need for a long-lasting relationship.",
	                "1": "The High Priestess encourages communication. You may have had a past relationship where you weren't able to fully express yourself. It's time for you to open up and be honest with your partner about what you need.",
	                "2": "You've learned to trust your intuition in the past. The High Priestess here is encouraging you to do so again. Whatever your mind is telling you, it's time to listen, even if your heart is stubbornly pointing in another direction.",
	                "3": "Here, the High Priestess is telling you that your partner needs better communication from you. They're looking to form a more intellectual bond through deep conversation.",
	                "4": "Your partner has been in a relationship that was intellectually stable but emotionally empty in the past. The High Priestess warns that you'll need to be frank about your feelings to keep your partnership strong.",
	                "5": "Your partner has learned to follow their intuition in the past. The High Priestess has guided them before and can do so again. Encourage them to listen to their logical interpretation of the situation and not merely their heart.",
					"6": "You have a very strong intellectual bond with your partner, as indicated by this card. As your relationship strengthens, communication will become increasingly important. Hold nothing back, and there's no telling how far this partnership could go."
	            }
	        },
	        "3": {
	        	"fname": "major-3",
	            "title": "The Empress",
				"text":"The Empress is a deeply maternal card. She represents nurturing, abundance, and femininity. She is stable and sensible, often indicative of fidelity and dedication. When you see this card in a love tarot reading, it usually indicates that you or your partner is a very caring, giving soul and will provide a deep level of support to the relationship.",
	            "descriptions": {
	                "0": "In this position, the Empress indicates that you deeply need this type of supportive relationship. Perhaps you've suffered from flighty partners in the past. What you crave most now is something secure and reliable. Make sure you're with or looking for a partner who fits this description.",
	                "1": "Though the Empress is nurturing, she can also be smothering. In this position, she indicates that you've been in a relationship with someone who clung on too tightly in the past. You may be keeping your new partner at arm's length out of fear.",
	                "2": "Here, the Empress speaks of your personal strengths. You are a deeply loving soul who is faithful and committed. Your caring will help strengthen your bond with your partner.",
	                "3": "In this position, the Empress represents your partner's greatest needs. They're looking for someone who is marriage material. Your partner wants a lasting commitment from you and not a short-lived fling. Check in with yourself to see if this is something you want to provide.",
	                "4": "Though the Empress is nurturing, she can also be smothering. Here, she represents baggage your partner is carrying from the past. They've been in a relationship where they felt they couldn't breathe and are wary of being held too tightly in this one. Give them space and your partnership will grow.",
	                "5": "Here, the Empress is telling you about your partner's strengths. They are deeply loving and faithful. This is the type of person who wants to settle down and stay in the relationship long-term.",
					"6": "In this position, the Empress speaks of the energy that you and your partner share. You have a deep and nurturing bond with one another. You're good at meeting each other's needs and are well-positioned for a lasting relationship that could lead to marriage."
	            }
	        },
	        "4": {
	        	"fname": "major-4",
	            "title": "The Emperor",
				"text":"The Emperor is the archetypal father figure of the tarot. He represents structure, authority, and power. This character is very practical, straightforward, and responsible in love, though he's not generally one for romance. He can represent abundance, prosperity, and acceptance into elite social circles, though this may come at the price of dealing with his authoritarian nature.",
	            "descriptions": {
	                "0": "In this position, the Emperor represents what you're looking for in a relationship. You've had enough flighty romances and need someone stable who can handle the practicalities of building a life together.",
	                "1": "The Emperor here speaks of some past baggage that you're carrying. Perhaps your last partner was too domineering and you're overcompensating for that now by resisting compromise and holding on too tightly to your own independence.",
	                "2": "In this position, the Emperor speaks of your own strengths. You have many of his characteristics and are well-poised to bring a sense of stability and order to the life you share with your partner.",
	                "3": "The Emperor here is telling you what your partner needs from you in this relationship. They're looking for strength and stability. If you're not interested in settling down, you may need to part ways.",
	                "4": "Here, the Emperor is speaking of some past baggage your partner is bringing into the relationship. They may have struggled with jealousy, possessiveness, and a lack of strong companionship in previous relationships.",
	                "5": "The Emperor in this position represents notable strengths in your relationship. This character indicates that you have great potential for a long and stable partnership.",
					"6": "In this position, the Emperor speaks of the energy that you share with your partner. You may not have a lot of butterflies and sparks, but you have something deeper and stronger that will help you withstand life's challenges."
	            }
	        },
	        "5": {
	        	"fname": "major-5",
	            "title": "The Hierophant",
				"text":"The Hierophant, also known as the Pope, is associated with higher callings and spiritual principles. This is an interesting card to pull in a reading about love because the Hierophant's nature is concerned more with morality than romance. This card often represents chaste, traditional relationships that are socially sanctioned or deeply rooted in spiritual traditions. This character is associated with balance, rightness, and stability.",
				"descriptions":{
	                "0": "Here, the Hierophant is telling you that you need to pursue a relationship that's in line with your higher spiritual calling. Make sure you're looking for a partner who has the same belief system as you and who can ultimately help you achieve your life's higher purpose.",
	                "1": "In this position, the Hierophant is warning you about baggage that you're carrying from a past relationship. Perhaps you compromised your spiritual beliefs to be with another person or felt pressured to take on their religion. Make sure you know where you stand in your belief system before you allow yourself to be influenced by another.",
	                "2": "The Hierophant here speaks of personal strengths that you bring to the relationship. You have a strong spiritual or moral foundation that will help guide you in this partnership. Follow your intuition and you'll make the right choices.",
	                "3": "The Hierophant in this position is telling you what your partner is looking for in a relationship. They want someone who is in line with their moral and spiritual beliefs and who can help support their higher calling.",
	                "4": "In this position, the Hierophant warns of past baggage that your partner may carry. They may have faced spiritual pressure or general confusion about their belief system in the past. Make sure you're supporting their journey while allowing them to walk their own path.",
	                "5": "The Hierophant in this position indicates the strengths that your partner brings to the relationship. They have a strong spiritual or moral foundation. If you agree on your belief systems, this can create a very strong relationship.",
					"6": "In this position, the Hierophant represents the energy that you share with your partner. You have a deep spiritual connection. You may feel like you were simply meant to be. You are the type of partners that are often referred to as soulmates."
	            }
	        },
	        "6": {
	        	"fname": "major-6",
	            "title": "The Lovers",
				"text": "The Lovers portend many romantic possibilities, but this card isn't always as straightforward as it may seem. This is one where it's particularly important to pay attention to placement. The Lovers represent relationships and harmony, but they also represent possibilities. Depending on your current status, the Lovers may also indicate a love for self rather than a romantic connection with someone else.",
	            "descriptions": {
	                "0": "In this position, the Lovers indicate that you're looking for someone to fill your love cup. It's run dry, and you're seeking physical and emotional fulfillment. Before you can truly enjoy this type of connection with another person, however, you have to generate enough self-love to fill the cup yourself and allow it to overflow and offer love to someone else.",
	                "1": "Here, the Lovers represent baggage that you're carrying. This card often speaks of abundance and choices. You may have several potential relationships to choose from, which will keep any one of these partnerships from thriving until you make a decision.",
	                "2": "In this position, the Lovers represent your strengths. You make a very loving, attentive partner. You're strong and confident, therefore unlikely to fall into a codependent relationship.",
	                "3": "This position speaks to what your partner needs most. The Lovers here are telling you that your partner is looking for a relationship where you complement one another in a very balanced way. You don't need to have the same strengths and weaknesses. You're better served when you can pick up your partner's slack and vice versa.",
	                "4": "Here, the Lovers are warning of baggage your partner may carry. Perhaps they have several choices available to them in love and haven't settled on their preferred course yet.",
	                "5": "The Lovers in this position are telling you about strengths your partner has. This partner is a very sensual, loving person. This will bring you the kind of relationship that always feels exciting and new.",
					"6": "In this position, the Lovers represent the energy that you share with your partner. This is an outstanding place to find this card, as it lets you know that you've found a strong, balanced partnership that has both the passion and the romance to last."
	            }
	        },
	        "7": {
	        	"fname": "major-7",
	            "title": "The Chariot",
				"text": "The Chariot is a card of willpower, determination, and success. The charioteer that you see here is guiding his conveyance not with physical reigns but with his mental fortitude. Though the creatures pulling the chariot face in different directions, he's able to guide them forward with his superior resolve. This card often speaks of individual characteristics that may play into the relationship more than the relationship itself.",
	            "descriptions": {
	                "0": "In this position, the Chariot represents what you need in love. The most crucial thing for you right now is to find your own personal direction. Decide what's most important to you in a relationship and steer unerringly toward that, even if it means parting ways with someone who isn't the right fit.",
	                "1": "In this position, the Chariot speaks of past baggage that you're carrying into your new relationship. You may feel vulnerable and afraid to stand up for what you really want. Take courage from the charioteer and begin guiding your life with your own outstanding determination.",
	                "2": "In this position, the Chariot represents strengths that you bring to the relationship. You know who you are and where you stand. You're clear on where you're going in this life, which will help you find a partner who's the right fit for that path.",
	                "3": "The Chariot currently represents what your partner needs from your relationship. They may feel nervous about sharing their true desires with you. Encourage them to take the reigns and steer their life on a course that's in line with their highest beliefs and goals.",
	                "4": "The Chariot in this position represents some past baggage that your partner is carrying into the relationship. You may find that your partner is so set on their course that you don't feel comfortable sharing your own personal map. Don't let this domineering personality silence you from sharing your needs.",
	                "5": "In this position, the Chariot indicates your partner's strengths. Their confidence in their path will prevent codependency and make it easier for you to determine whether your personal maps align.",
					"6": "Here, the Chariot represents the energy that you and your partner share. You are both strong and confident. When you're on the same path, nothing can stand in your way."
	            }
	        },
	        "8": {
	        	"fname": "major-8",
	            "title": "Strength",
				"text": "As its name suggests, the Strength card is about power and courage. While there is a certain ferocity to Strength, it is also depicted here as something that can be tamed with dedication and resilience. This card represents both internal and external strength, which can propel you forward when you find it within yourself and not another.",
	            "descriptions": {
	                "0": "In this position, the Strength card speaks to what you need most from a relationship. You're seeking a partnership where there's great emotional strength and stability between the two of you. A weak or casual partnership won't serve your needs.",
	                "1": "Here, the Strength card depicts baggage you carry from your past. You've likely felt like you had to be the source of stability and support in past relationships and are wary of any new relationship that might become burdensome or codependent.",
	                "2": "The Strength card here indicates that you've learned an important lesson about becoming overly reliant on another's care and stability in the past. When you let someone else provide your strength, you're poised to fall. Make sure you're relying on your inner strength in the future.",
	                "3": "In this position, the Strength card represents what your partner needs most in a relationship. They're looking for stability and someone confident they can rely on. While you do want to be dependable, make sure you're not holding your partner's life together for them.",
	                "4": "Here, Strength indicates some baggage that your partner is carrying from a past relationship. They've been the rock for someone else in the past and suffered from the codependency. Make sure you're bringing your own strength into this relationship and not relying solely on theirs.",
	                "5": "The Strength card in this position indicates that your partner has learned the value of independence and fortitude in the past. They are in a good position to bring their own inner strength to your partnership provided that you can do the same.",
					"6": "The Strength card here relates to the energy between yourself and your partner. You provide valuable support to one another and are able to accept each other fully for who you are. Make sure you don't take this powerful connection for granted or you may lose it."
	            }
	        },
	        "9": {
	        	"fname": "major-9",
	            "title": "The Hermit",
				"text": "The hermit is a solitary figure that represents time alone dedicated to soul searching and introspection. Though this isn't something you might immediately associate with a relationship, it's important to realize that the hermit can offer you some of the most powerful love lessons of all.",
	            "descriptions": {
	                "0": "In this position, the Hermit is telling you that what you need most right now is time for independent soul searching. Carefully consider whether your current relationship serves your higher calling. Internal peace is required to move forward.",
	                "1": "Here, the Hermit represents past baggage that's testing your relationship. You may have come together without fully knowing yourself. You need to step back and do some soul searching before your relationship can progress.",
	                "2": "The Hermit here indicates that you have great internal strength. You know yourself fully and are able to bring that peace and knowledge into your relationship.",
	                "3": "In this position, the Hermit is telling you that your partner needs a deep and soulful relationship. They're not looking for a surface connection or casual romance. Make sure you're ready for this type of commitment.",
	                "4": "The Hermit here represents past baggage your partner has. They need to do some personal soul searching before they'll be able to commit fully to your relationship. Give them the time and space to do so.",
	                "5": "The Hermit here represents your partner's greatest strength. They have gone through a period of reflection and soul searching to get where they are now and can bring peace and confidence to the relationship. Make sure you're equally equipped.",
					"6": "TIn this position, the Hermit represents the connection that you share with your partner. This is a deep and soulful relationship. You connect on a spiritual level and feel as though you've known each other for lifetimes. Perhaps you have."
	            }
	        },
	        "10": {
	        	"fname": "major-10",
	            "title": "Wheel of Fortune",
				"text": "The Wheel of Fortune represents the natural cycle of life. In a relationship, this is often a cycle of endings and beginnings. It can also refer to the cyclical seasons of a relationship which begin with the spring of new love, progress into the fun of summer, move into the fruitful harvest of fall, and progress to the quiet and contemplative winter.",
	            "descriptions": {
	                "0": "In this position, the Wheel of Fortune represents what you currently need in your love life. It's time for a change. This could mean that your relationship is coming to a natural end or that it's progressing to a new level.",
	                "1": "Here, the Wheel of Fortune is warning of past baggage you're carrying into your relationship. Something is keeping you stuck and stagnant, preventing you from cycling through the wheel. It's important to accept change and move with the natural seasons of the universe.",
	                "2": "The Wheel of Fortune here speaks to traits you have that will strengthen your partnership. You're good at going with the flow, and your ability to progress readily with the seasons of life will serve you well.",
	                "3": "The Wheel of Fortune here is telling you what your partner needs from the relationship. It's time for a change — either a new partnership or a new level of commitment.",
	                "4": "In this position, the Wheel of Fortune represents past baggage that your partner is carrying. They may feel stuck on the wheel or tossed about by its movement and unable to find their footing. It's crucial that you seek balance and determine where you truly stand.",
	                "5": "Here, the Wheel of Fortune represents your partner's strengths. They're skilled at recognizing and honoring the cyclical nature of life. You can rely on their intuition to recognize when it's time to progress to a new stage as well as when it's time to move.",
					"6": "The Wheel of Fortune here represents the bond that you have with your partner. This is a strong relationship that was guided by fate. Rest easy knowing that your matchmaking was done by the Universe."
	            }
	        },
	        "11": {
	        	"fname": "major-11",
	            "title": "Justice",
				"text": "The Justice card represents cause and effect, karma, and personal responsibility. This card speaks to you about how your past actions and choices will affect your present situation. This doesn't mean that your future is held captive by your past, but it does indicate that you need to recognize how your prior decisions or relationships are impacting your partnership now.",
	            "descriptions": {
	                "0": "In this position, Justice is telling you what you need most in your relationship. There's some imbalance in your partnership that you need to address. Check in to make sure that there's an even amount of give and take between yourself and your partner.",
	                "1": "Here, Justice represents baggage that you're carrying from the past. You will soon feel the karmic effects of how you've acted toward other partners. This could be either positive or negative, but the most important thing is to see the lesson the universe is teaching you from this experience.",
	                "2": "The Justice card here is telling you that you're about to learn an important lesson from your past. Expect a karmic payout. Perhaps you'll finally receive the reciprocal affection you didn't get from another partner, or you'll find some crucial insights into how your behavior impacts others.",
	                "3": "The Justice card in this position represents what your partner needs from your relationship. They're looking for a change. This is a good time to open up a discussion about where you are and where you'd like go in the future.",
	                "4": "Justice here represents your partner's past baggage. They're about to learn an important karmic lesson about how they've treated others. Positive or negative, it's important for you to support this learning experience for them.",
	                "5": "Justice here is telling you that your partner is about to learn something valuable about their past. The way that you relate to one another is part of a karmic lesson from the universe. You could very well be the source of an important revelation for them.",
					"6": "The Justice card here pertains to how you and your partner relate to one another. There's a good balance between the two of you. Your strengths make up for your partner's weaknesses and vice versa. Appreciate this balance fully, but don't fall into the trap of codependency because of it."
	            }
	        },
	        "12": {
	        	"fname": "major-12",
	            "title": "The Hanged Man",
				"text": "The Hanged Man is dangling upside down and seeing the world from a new perspective. Though the name of this card seems foreboding, it's actually an intriguing pull, especially when you're looking for information about a relationship.",
	            "descriptions": {
	                "0": "Here, the Hanged Man represents what you need in your relationship. It's time to look at things from a different viewpoint. Stop using the same approach to unsolved problems and try something new.",
	                "1": "The Hanged Man in this position represents baggage from a past relationship. You're stuck looking at things from the same point of view. It's time to invert the picture and try a different approach. ",
	                "2": "Here, the Hanged Man indicates something important that you can learn from the past. Consider how you approached issues previously. Did you abandon a tactic that served you well? Something that you've attempted before will inspire you to find the right solution to your current problem.",
	                "3": "The Hanged Man here represents what your partner needs from your relationship. They're stuck in a rut and need to look at things from a different perspective. Break out of the routine and shake things up.",
	                "4": "Here, the Hanged Man represents baggage from your partner's past relationship. They're repeating old patterns and about to make the same mistakes again. Encourage them to try a different approach.",
	                "5": "The Hanged Man in this position indicates that your partner has an important lesson to learn from the past. Something that they've been through before will inspire them to take a fresh approach to life now.",
					"6": "Here, the Hanged Man represents the energy between you and your partner. Things have become stagnant between you recently, but it's not too late. Take a vacation, plan an unexpected date night, or just try something new at home. You might be surprised at the results."
	            }
	        },
	        "13": {
	        	"fname": "major-13",
	            "title": "Death",
				"text": "In the Tarot, Death represents the natural transition from one thing to another. Even successful relationships experience many deaths as things grow, progress, and change. Consider the position of the Death card carefully.",
	            "descriptions": {
	                "0": "Here, Death is telling you what you need in your relationship. You're holding on to something destructive, and it's time to let it go. Lay your past arguments or worries to rest respectfully and move on.",
	                "1": "In this position, Death represents baggage from a past relationship. You need to lay the past to rest and finish mourning your last love before you can be successful with a new one.",
	                "2": "Here, Death represents your strengths. It's time to remember that you're fully capable of accepting the inevitable, letting go of what no longer serves you, and growing something new in its place. Find what you need to release and mindfully do so.",
	                "3": "In this position, Death is telling you what your partner needs from your relationship. They're holding onto something that's no longer serving your partnership. You can only proceed on this path together if they're willing to let it go.",
	                "4": "Here, Death represents baggage that your partner is carrying from a past relationship. They're holding on to a previous love too tightly and haven't laid that partnership to rest yet. Step back and give them time to heal from the past before you try to build a new relationship together.",
	                "5": "Here, Death represents a lesson that your partner needs to learn. Something is holding them back, and it's time for them to let go. Recognize that this could be a very personal mourning process that you can't directly help with. Give them time, space, and respect.",
					"6": "In this position, Death represents the current energy between you and your partner. It's time for something to change. This could mean the death of the honeymoon phase of the relationship and the beginning of something deeper or it might portend the end of this partnership. Examine whether the time has come to move on."
	            }
	        },
	        "14": {
	        	"fname": "major-14",
	            "title": "Temperance",
				"text": "Temperance is a charming card that represents harmony and peace. This is a very positive pull for a relationship reading, as it has a wealth of valuable lessons to offer that will help you create a long-term partnership that's built to last.",
	            "descriptions": {
	                "0": "Here, Temperance represents what you need in your relationship. This card is calling upon you to practice patience and moderation. Don't try to rush things. Your partnership will grow beautifully at its own unique pace.",
	                "1": "In this position, Temperance gently warns of some baggage you're carrying into your relationship. You need to lay your prior hurts to rest and make sure you're not bringing them into your new partnership.",
	                "2": "Temperance represents your personal strengths here. This card indicates that your dedication and patience will pay off. One of your greatest gifts is staying the course and weathering the storm, which will serve you well right now.",
	                "3": "Here, Temperance tells you what your partner needs most from the relationship. They require patience and understanding of what they're dealing with right now. Don't pressure them to move forward or make a big change. Now is the time to move slowly.",
	                "4": "In this position, Temperance warns of baggage your partner is carrying from a past relationship. Watch carefully to make sure you're not in a love triangle. Patience is usually rewarded, but you need to weigh this carefully against your own best interests.",
	                "5": "Temperance here represents your partner's greatest strengths. They are extremely patient and loyal. Make sure you don't take this for granted and push their tolerance too far.",
					"6": "Temperance in this position represents the energy between yourself and your partner. You have a good connection, but this is a partnership that needs to grow slowly over a long period of time. Don't rush in, or it will fizzle out."
	            }
	        },
	        "15": {
	        	"fname": "major-15",
	            "title": "The Devil",
				"text": "The Devil card represents your shadow self. It offers insights into the side of your personality or relationship which isn't readily seen. This isn't always bad, but it does require mindfulness and care. If your passions aren't tempered properly, they can turn into addictions or unhealthy habits.",
	            "descriptions": {
	                "0": "Here, the Devil represents what you need most in your relationship. It's important that you recognize and respect your shadow self. Check on your moral compass and make sure it's still pointed north.",
	                "1": "The Devil is warning you here of past baggage that you're bringing into your current relationship. You may feel lust for a past lover still or have an addiction that you haven't addressed. You'll need to face your shadow side to succeed in this partnership.",
	                "2": "The Devil in this position indicates a lesson that you need to learn from your past. Perhaps you let lust play too important of a role in your love life before. Learn from your previous errors to build a stronger partnership this time around.",
	                "3": "In this position, the Devil is letting you know about what your partner needs most in your relationship. They need to learn to embrace and moderate their shadow self. It's important to find a way to keep lust and gluttony at bay and enjoy one another on all levels of your partnership.",
	                "4": "Here, the Devil indicates that your partner is carrying some baggage from a past relationship. This is likely lust for someone. Make sure they have time to move on before you attempt to build a new partnership together.",
	                "5": "In this position, the Devil is warning that your partner has some lessons they need to learn from their past. Perhaps they have a habit of indulging lust-driven encounters or allowing their impulses to guide their decisions. They need to better regulate their behavior for your relationship to succeed.",
					"6": "The Devil card here represents the energy between yourself and your partner. You have a lot of physical chemistry and desire for one another, but you'll need to work to temper this if you want to allow the relationship to grow deeper."
	            }
	        },
	        "16": {
	        	"fname": "major-16",
	            "title": "The Tower",
				"text": "The Tower represents change and chaos, but it can also portend an important awakening or revelation. This card depicts the destruction of a tall tower, which is a sobering image. It can certainly indicate a major change is on the way, but it's important to recognize that you must sometimes demolish one thing to make room for the construction of another.",
	            "descriptions": {
	                "0": "In this position, the Tower indicates that you need a change in your relationship. Something destructive is happening, and you must either extinguish the flames and rebuild or find a safe escape route.",
	                "1": "Here, the Tower indicates baggage you're bringing into your relationship. You may feel like a victim or find yourself in a codependent situation. Examine what you need to break down to escape these feelings.",
	                "2": "In this position, the Tower represents lessons you can learn from the past. Consider how you rebuilt your life in the wake of a past hardship. Is it on a strong foundation, or do you feel that the structure is about to topple? It's important to seek stable footing.",
	                "3": "Here, the Tower card represents what your partner needs from your relationship. There's something going on that's destructive to them. They need to make a change for your partnership to grow.",
	                "4": "Here, the Tower indicates past baggage your partner is bringing into the relationship. They may feel cornered or out of control in the current situation, as though they're on the burning tower and must escape. Find a way to stabilize the situation.",
	                "5": "In this position, the Tower card represents lessons from the past that your partner needs to learn. They may have recently rebuilt their life. Make sure they did so on a strong foundation and not on codependency with you.",
					"6": "In this position, the Tower represents the energy between you and your partner. There's a lot of tension right now because you're about to experience a major change. Open yourself up to the possibility that a little destruction can make room for future growth."
	            }
	        },
	        "17": {
	        	"fname": "major-17",
	            "title": "The Star",
				"text": "The Star represents the manifestation of your hopes and dreams as you emerge from darkness into light. However, accessing the beautiful manifestations that the Star can offer isn't always a tidy process. Sometimes you have to wish upon a few falling stars before you find what you're truly seeking.",
	            "descriptions": {
	                "0": "In this position, the Star represents what you need in your relationship. You're seeking someone who can fulfill your deepest desires. The time is ripe to build a long-term relationship, so don't settle for less.",
	                "1": "Here, the Star represents baggage from a past relationship. Perhaps your history has left you feeling hopeless or unworthy. It's important to build your confidence and know your self-worth so you can manifest the best relationship possible for you.",
	                "2": "In this position, the Star represents your strengths. You know what you want in a relationship, and the universe is granting it to you. Keep an eye on the horizon because there are beautiful things ahead.",
	                "3": "In this position, the Star represents what your partner needs in a relationship. They're looking for a deep, lasting connection. Make sure you feel the same.",
	                "4": "The Star here represents baggage that your partner is carrying from the past. They may feel unworthy or fearful of their wishes being granted. Help them build their self-worth, but don't become their sole source of confidence.",
	                "5": "The Star in this position indicates your partner's greatest strengths. They are wise and trustworthy. This person respects you deeply, providing a great foundation for your future relationship.",
					"6": "The Star here represents the energy between yourself and your partner. You two have a beautiful relationship that was truly written in the stars. This could be the lasting connection you've always been waiting for."
	            }
	        },
	        "18": {
	        	"fname": "major-18",
	            "title": "The Moon",
				"text": "The Moon is a mysterious card. Though it can shine brightly, it also has a dark side. Just as the crescent moon in the sky shows only part of the sphere, so too can a relationship appear different from what it really is. This card calls for a careful examination of your partnership.",
	            "descriptions": {
	                "0": "Here, the Moon represents what you need in your relationship. You're seeking a connection that's enigmatic and exciting. You want someone to create a little magic and sweep you off your feet. Be careful not to get so caught up in the experience that you overlook the person it's with.",
	                "1": "In this position, the Moon represents baggage that you're carrying from your past. You may be so preoccupied with avoiding certain traits in a partner that you're not paying attention to the qualities that you really need from them.",
	                "2": "The Moon here represents important lessons that you've learned in the past. You know from previous experiences that people aren't always what they seem. Keep this in mind and don't let your love be blind.",
	                "3": "Here, the Moon represents what your partner needs most from a relationship. They're looking for a romantic, magical experience. Consider planning something special to ignite that flame.",
	                "4": "The Moon here represents baggage your partner is carrying from their past. They likely dated someone who was not what they seemed, and they're wary of experiencing the same with you. Be true to yourself and they'll see your lovely traits in time.",
	                "5": "Here, the Moon represents lessons that your partner has learned from the past. They don't get swept up in romance easily because they've seen that puppy love goes away quickly. Focus on the deeper side of your relationship and get to know one another better.",
					"6": "The Moon in this position represents the energy in your relationship. There's a lot of excitement and mystery that you could easily get swept up in. Make sure you're taking time to really get to know one another as well."
	            }
	        },
	        "19": {
	        	"fname": "major-19",
	            "title": "The Sun",
				"text": "The Sun represents bright, cheerful relationships and pleasurable experiences. Basking in its warmth, you can enjoy an easy love that's blessed with fulfillment. If this isn't how your relationship currently feels, consider that the sun rises anew each morning. You may find a bright rebirth on the horizon.",
	            "descriptions": {
	                "0": "The Sun here is telling you that you need stability and harmony in your relationship. A tumultuous bond or light-hearted fling won't meet your true needs, so make sure your partner is committed to providing something deeper.",
	                "1": "In this position, the Sun represents past baggage that's testing your relationship. Are you holding your partner to impossibly high standards? While it's great to have a sunny and optimistic attitude, you shouldn't assume that a few rain clouds mean all is lost.",
	                "2": "Here, the Sun represents your strengths in the relationship. You're optimistic, lighthearted, and easy-going. You bring a sense of joy and child-like wonder to your encounters that are refreshing for your partner.",
	                "3": "The Sun is telling you that your partner is looking for a bright future and long-term relationship. They're seeking a pleasurable path filled with blessings like marriage, family, and cozy home for the both of you.",
	                "4": "Here, the Sun represents past baggage that your partner is bringing into the relationship. The sun is bright, but it can also be blinding. Perhaps they're refusing to see or address an issue that needs to be resolved.",
	                "5": "The Sun here represents your partner's greatest strengths. They have an optimistic attitude and cheerful demeanor that makes your time together a true joy. Make sure you're bringing your own light to the relationship as well and not simply relying on theirs.",
					"6": "The Sun in this spot indicates that there's a joyful energy between yourself and your partner. This is a relationship blessed with harmony and happiness."
	            }
	        },
	        "20": {
	        	"fname": "major-20",
	            "title": "Judgment",
				"text": "The Judgment card represents introspection and a closer examination of your relationship. It's important to assess your relationship from time to time to make sure that it's meeting your needs. This card can indicate that fresh insights and positive changes are on the horizon.",
	            "descriptions": {
	                "0": "Here, the Judgment card represents what you need from your relationship. It's telling you that it's time to take stock of your partnership and your life to make sure that you're where you need to be.",
	                "1": "This card indicates some past baggage that's hindering your relationship. You need to take some time for soul searching to find out what's holding you back and what needs to be released.",
	                "2": "The Judgment card here represents important lessons you've learned in the past. You've been in a relationship where there wasn't enough appreciation or balanced nurturing taking place. Remember this experience and make sure you don't repeat it.",
	                "3": "This card is currently telling you that your partner needs a period of soul searching to make sure they're on the right path. This might be the time to step back and give them space so they can return with greater conviction that you're meant to be together.",
	                "4": "In this position, the Judgment card represents some baggage your partner is carrying. There's something from the past that they haven't fully addressed, and it's holding your relationship back.",
	                "5": "This card represents important lessons that your partner has learned from the past. They were previously in a relationship where they weren't appreciated enough. Make sure to demonstrate how thankful you are for them now.",
					"6": "The Judgment card in this position represents the current energy between yourself and your partner. You may feel some tension right now because you're on the precipice of a major change. Keep in mind that change is good and necessary when approached from a balanced viewpoint."
	            }
	        },
	        "21": {
	        	"fname": "major-21",
	            "title": "The World",
				"text": "The World represents the completion of one part of your life and a new beginning in the next phase. This card is associated with wholeness and unity. This is typically a positive card, but it's also easy to feel that when you have the world, there's nothing left to strive for.",
	            "descriptions": {
	                "0": "In this position, the World represents what you need in your relationship. You haven't yet attained complete fulfillment, but you're striving to find a partner that's perfectly matched to you in every way.",
	                "1": "Here, the World represents some baggage you're carrying. You may feel vulnerable, uncertain, or insecure. This card is calling you to work on your self-confidence to reach your full potential.",
	                "2": "The World in this spread represents lessons you've learned in the past. You know that it's dangerous to fall into the complacency of feeling like you have it all. Keep nurturing your relationship, even if it seems perfect.",
	                "3": "The World in this position represents what your partner needs from the relationship. They're looking for The One and seeking a commitment that will complete their life and last forever. Are you interested in the same?",
	                "4": "The World in this spread represents past baggage that your partner is carrying. They're having trouble accepting the abundance that you currently have due to a lack of self-confidence. Give them space to work on their personal growth.",
					"5": "The World here represents past lessons your partner has learned. They shy away from complacency because they've seen how becoming overly comfortable can ultimately harm a relationship.",
					"6": "The World here represents the energy between yourself and your partner. You have a strong bond that can fulfill you both completely. Cherish this and always give it the care and appreciation it deserves."
	            }
	        }
	    },

		setStage : function(){
			if ($(window).width() <= 800) this.mobile = true
				else this.mobile = false;

			var stage = { height: 0, width: 0 };
			stage.height = (this.mobile)? $(window).height() : $(window).height()-$('#footer').height();
			stage.width = $(window).width()*.7;

			$('#card-select .card-cont').height(stage.height/2.5);
			//$('#end-screen').height(stage.height);

			var resultMargin = (this.mobile)? 0 :($(window).width()-$('#end-screen').width())/2;
			/* $('#results-cont .result-card').css({
				'width': $('#end-screen').width(),
				'margin-right': resultMargin*2
			});
			$('#results-cont .inner-cont').css({
				'left': 0,
				'width': ($('#results-cont .result-card').outerWidth()+(resultMargin*2))*6
			}); */
			if(this.mobile){
				$('.cont').css({
					height: '100%',
					top: 0
				});
				$('#results-cont').height($('#results-cont .inner-cont').outerHeight());
			}else{
				for (var i = 0; i < $('#results-cont .result-card').length; i++) {
					var titleWidth = $('#results-cont .result-card').eq(i).find('.right .reading-title').outerWidth()+($('#results-cont .result-card').eq(i).find('.outline .right').width()*2);
					var outlineWidth = $('#results-cont .result-card').eq(i).find('.outline').width();
					$('#results-cont .result-card').eq(i).find('.outline .left').width(outlineWidth-titleWidth);
				};
				for (var i = 0; i < $('#main-wrapper .cont').length; i++) {
					var padding = (stage.height/2)-($('#main-wrapper .cont').eq(i).outerHeight()/2);
					$('#main-wrapper .cont').eq(i).css({
						height: '',
						'top': (padding<0)? 0 : 20
					});
				};

				var endScreenPadding = parseInt($('#end-screen').css('padding'))*2;
				//var endScreenHeight = $('#end-screen .title').height()+parseInt($('#end-screen .title').css('margin-bottom'))+$('#end-screen .inner-cont').height()+endScreenPadding;
				var endScreenHeight = stage.height-40;
				var endScreeninnerHeight = stage.height-$('#end-screen .title').height()-40;
				$('#end-screen').css({
					height: endScreenHeight,
					top: (stage.height/2)-(endScreenHeight/2)
				});
				$('#end-screen .inner-cont .result-card').css({
					height: endScreeninnerHeight
				});
			}
		},

		transitionScreen : function(screenNum){
			var that = this;
			if(screenNum == 2) that.setEndScreen();

			$('#main-wrapper .cont').animate({'opacity': '0'});
			$('#main-wrapper .cont').eq(screenNum-1).animate({'opacity': '1'}, function(){
				if(screenNum == 2) that.layCards(true);
			});

			$('#main-wrapper .cont').css('pointer-events', 'none');
			$('#main-wrapper .cont').eq(screenNum-1).css('pointer-events', 'auto');

			this.currentScreen = screenNum;
		},

		setEndScreen: function(){
			
			$('#results-cont .inner-cont').css('left', 0);
			for(theCard in this.selectedCardArray){
				var order = theCard;
				var cardNum = this.selectedCardArray[theCard];
				$('#results-cont .result').eq(order).find('.card-img').attr('src', 'img/'+this.characters[cardNum]['fname']+'.png');
				$('#results-cont .mobile_result').eq(order).find('.card-img').attr('src', 'img/'+this.characters[cardNum]['fname']+'.png');
				$('#results-cont .card-width').eq(order).find('.card').attr('src', 'img/'+this.characters[cardNum]['fname']+'.png');
				
				$('#results-cont .result').eq(order).find('.text').html(this.characters[cardNum]['text']);
				$('#results-cont .mobile_result').eq(order).find('.text').html(this.characters[cardNum]['text']);
				$('#results-cont .result').eq(order).find('.card-title').html(this.characters[cardNum]['title']);
				$('#results-cont .mobile_result').eq(order).find('.card-title').html(this.characters[cardNum]['title']);
				$('#results-cont .result').eq(order).find('.descrip').html(this.characters[cardNum]['descriptions'][order]);
				$('#results-cont .mobile_result').eq(order).find('.descrip').html(this.characters[cardNum]['descriptions'][order]);
			};
			this.setStage();
		},

		nextCard: function(){
			if(this.mobile)$('#main-wrapper #end-screen').scrollTop(0);
			var curPos = $('#results-cont .inner-cont').css('left');
			var padding = (this.mobile)? 0 : ($(window).width()-$('#end-screen').width())/2;
			$('#results-cont .inner-cont').animate({'left': parseInt(curPos)-($('#results-cont .result-card').outerWidth()+(padding*2))})
		},

		prevCard: function(){
			if(this.mobile)$('#main-wrapper #end-screen').scrollTop(0);
			var curPos = $('#results-cont .inner-cont').css('left');
			var padding = (this.mobile)? 0 : ($(window).width()-$('#end-screen').width())/2;
			$('#results-cont .inner-cont').animate({'left': parseInt(curPos)+($('#results-cont .result-card').outerWidth()+(padding*2))})
		},

		newReading: function(){
		
			this.transitionScreen(1);
			app.layCards(true);
			if(this.mobile){
				$(".mimg").removeClass("img-shadow");
                 $('.mobile_result').hide();
				 $('.mobile_black_card').hide();
			} 
		},

		resetCards : function(anim){
			this.selectedCardArray = [];
			this.animationCardArray = [];

			for(var i = 0; i<21; i++){
				this.animationCardArray.push(i);
			}

			if(anim){
				$('#card-select .card-cont .card').animate({
					'left': 0,
					'opacity': 0,
					'bottom': '-100%'
				});
			}else{
				$('#card-select .card-cont .card').css({
					'left': 0,
					'opacity': 0,
					'bottom': '-100%'
				});
			};
			$('#card-select .card-cont .card').css({
   				"-webkit-box-shadow": '',
    			"-moz-box-shadow": '',
    			"box-shadow": '',
				'-o-transform': 'rotate(0deg)',
				'-webkit-transform' : 'rotate(0deg)',
				'-moz-transform' : 'rotate(0deg)',
				'-ms-transform' : 'rotate(0deg)',
				'transform' : 'rotate(0deg)'
			});
			$('#card-select .count span').html('0');
			$('#card-select .count span').css('opacity', '0.7');
			$('#card-select .btn').css({
				'opacity': '0.5',
				'pointer-events': 'none'
			});
		},

		layCards : function(anim){
			this.resetCards((anim)? true : false);

			var contWidth = ($('#card-select .inner-cont').width()-parseInt($('#card-select .inner-cont').css('margin-right')))-$('#card-select .card-cont .card').width();
			var topPercent = $('#card-select .card-cont').height()*.3;
			
			var interval = Math.PI * 1/20;
			var position = 0;
			var degrees = 5;
            var data= 5.5;
			var index= 21;
			for(var i = 0; i<21; i++){
				var randomCardNum = this.getRandomCardNum();
				var card = $('#card-select .card-cont .card').eq(randomCardNum);
				var origin = '50% 20%'; 
				var bottom = (this.mobile)? (($('#card-select .inner-cont').height()/2)-($('#card-select .card-cont .card').eq(i).height()/2)) : data;
				/* if(!this.mobile)card.css({
					'-o-transform': 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'-webkit-transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'-moz-transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'-ms-transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)',
					'transform' : 'rotate('+ (21 * Math.sin(degrees)) +'deg)'
             	}); */
				
				
				if(this.mobile){
					card.css('z-index', i);
				if(anim){
					card.animate({
						'left': (contWidth/19)*i,
						'opacity': 1,
						'bottom': bottom
					}, 75*i)
				}else{
					card.css({
						'left': (contWidth/19)*i,
						'opacity': 1,
						'bottom': bottom
					});
				}
				position += interval;
				degrees += interval;
				}else {
					card.css('z-index', index);
				if(i <= 9) {
				if(anim){
					card.animate({
						'left': (contWidth/24)*i,
						'opacity': 1,
						'bottom': bottom+'%'
					}, 75*i)
				}else{
					card.css({
						'left': (contWidth/24)*i,
						'opacity': 1,
						'bottom': bottom+'%'
					});
				}
				}
				else if(i == 10){
					if(anim){
					card.animate({
						'left': ((contWidth/24)*i)+40,
						'opacity': 1,
						'bottom': bottom+'%'
					}, 75*i)
				}else{
					card.css({
						'left': ((contWidth/24)*i)+40,
						'opacity': 1,
						'bottom': bottom+'%'
					});
				}
				}else{
					if(anim){
					card.animate({
						'left': ((contWidth/24)*i)+80,
						'opacity': 1,
						'bottom': bottom+'%'
					}, 75*i)
				}else{
					card.css({
						'left': ((contWidth/24)*i)+80,
						'opacity': 1,
						'bottom': bottom+'%'
					});
				}
				}
				position += interval;
				degrees += interval;
				if(i <= 9) {
				data= data-5.5;
				index= index-1;
				}else {
					if(i==11) {
						data= data+5.5;
					}
					else {
						data= data+5.5;
					}
					
					index= index+1;
				}
				}
			};
		},

		getRandomCardNum : function(){
			var arrayLength = this.animationCardArray.length-1;
			var randomNumber = Math.round(Math.random()*arrayLength);
			var cardNum = this.animationCardArray[randomNumber];
			this.animationCardArray.splice(randomNumber, 1);
			return cardNum;
		},

		cardClick : function(card){
			var cardNum = $(card).attr('data-order');

			for(theCard in this.selectedCardArray){
				if(this.selectedCardArray[theCard] === cardNum){
					this.selectedCardArray.splice(theCard,1);
					$(card).animate({ 'bottom': parseInt($(card).css('bottom'))-10 });
					$('#card-select .count span').html(this.selectedCardArray.length);

					$('#card-select .count span').css('opacity', '0.7');
					$('#card-select .btn').css({
						'opacity': '0.5',
						'pointer-events': 'none'
					});
					return;
				};
			};
			if(this.selectedCardArray.length < 7) this.selectedCardArray.push(cardNum)
				else return;

			if(this.selectedCardArray.length == 7){
				$('#card-select .count span').css('opacity', 1);
				$('#card-select .btn').css({
					'opacity': 1,
					'pointer-events': 'auto'
				});
			}
			$(card).animate({ 'bottom': parseInt($(card).css('bottom'))+10 });
			$(card).css({
   				"-webkit-box-shadow": '0px 0px 30px 5px rgba(255,255,255,1)',
    			"-moz-box-shadow": '0px 0px 30px 5px rgba(255,255,255,1)',
    			"box-shadow": '0px 0px 30px 5px rgba(255,255,255,1)',
			});
			$('#card-select .count span').html(this.selectedCardArray.length);
			this.setEndScreen();
		},

		resize : function(){
			this.setStage();
			this.layCards(false);
		},

		init : function(){
			this.setStage();
			this.layCards(true)
			$('#intro .btn').on('click', function(e){ e.preventDefault(); app.transitionScreen(2); });
			$('#card-select .btn').on('click', function(e){ e.preventDefault(); app.transitionScreen(2); });
			$('#card-select .shuffle').on('click', function(e){ e.preventDefault(); app.layCards(true); });
			$('#card-select .card').on('click', function(e){ e.preventDefault(); app.cardClick(e.target); });
			$('#results-cont .result-card .btn-next').on('click', function(e){ e.preventDefault(); app.nextCard(); });
			$('#results-cont .result-card .btn-prev').on('click', function(e){ e.preventDefault(); app.prevCard(); });
			$('#results-cont .result-card .btn-reset').on('click', function(e){ e.preventDefault(); app.newReading(); });
			$('#results-cont .btn-reset').on('click', function(e){ e.preventDefault(); app.newReading(); });

			$(window).on('resize', function(){ app.resize(); });
		}
	};
 

	$(window).on('load', function(){ app.init(); });
});
	$('a.loginwindow').click(function() {
		$('.flip-card-back').css('transform', 'rotateY(180deg)');
        $('.popup').fadeOut(300);
		var loginPopupBox = $(this).attr('href');
		$(loginPopupBox).fadeIn(300);
		var img = $(loginPopupBox).find('.card-img').attr('src');
		$(this).find('.card').attr('src', img);
		$(this).find('.flip-card-back').css('transform', 'rotateY(0deg)');
		var popMrTop = ($(loginPopupBox).height() + 24) / 2;
		var popMrLeft = ($(loginPopupBox).width() + 24) / 2;

		$(loginPopupBox).css({
			'margin-top' : -popMrTop,
			'margin-left' : -popMrLeft
		});
         return false;
	});
	
	$('a.mobile-black-card-div').click(function() {
	$(".mimg").removeClass("img-shadow");
	$(this).find('.mimg').addClass('img-shadow');
	    $('.btn-reset.mobile_only').hide();
		$('.mobile_result').hide();
		var mdiv = $(this).attr('href');
		$('.big_black_mobile_img').attr('href', mdiv);
		$('.mobile_black_card').show();
		$('.big_black_mobile_img').show();
		return false;
	});
	$('a.big_black_mobile_img').click(function() {
		
		var cdiv = $(this).attr('href');
		$('.big_black_mobile_img').hide();
		$(cdiv).show();
		$('.btn-reset.mobile_only').show();
		return false;
	});
	$('a.closediv, #bg-popup').on('click', function() {
	  $('#bg-popup , .popup').fadeOut(300 , function() {
	  $('.flip-card-back').css('transform', 'rotateY(180deg)');
		$('#bg-popup').remove();
	});
	return false;
	});

	$(document).on('click', function(event) {
	if (!$(event.target).closest('#login-divbox').length)
	{
		$('#bg-popup , .popup').fadeOut(300 , function()
		{
			 $('#bg-popup').remove();
			 $('.flip-card-back').css('transform', 'rotateY(180deg)');
		});
	}
	});