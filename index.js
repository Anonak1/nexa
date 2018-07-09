const Discord = require('discord.js');
const bot = new Discord.Client();
//const cliient = new Discord.Client(options);
bot.login('NDYzNzY3MDUyNTI0NTg0OTgy.Dh1SOQ.vCrneyCEHn0VHCqsvu1wzPb4DlY');

bot.on("ready", function() {
    bot.user.setActivity('!Help');
    console.log("Nexa s'est réveillée et s'est connectée toute seule comme une grande!");
})


bot.on("guildMemberAdd", member =>{
    
    member.guild.channels.find('name', 'arrivée').send(`Bienvenue ${member.user.username}! \n Lis les règles du serveur dans le channel #règles-et-droits-d-auteurs🎬💻 pour pouvoir rejoindre les channels de discussion, c'est important! ;)` );

    console.log(`User ${member.user.username} has joined the server!`);

    var role = member.guild.roles.find('name', 'waiting');

    member.addRole(role);

    bot.on('message', function(message){
        if (message.author.id === '463767052524584982'){
                
                   message.react("✅")
                   message.react("❌")
             }
    
    
    })
    
    bot.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name === "✅" && user.id !== '463767052524584982') {
            
            bot.channels.get('463758782174986251').send('Merci d\'avoir lu le règlement. Tu peux dès maintenant commencer à discuter dans #🔥τchαt-gεηεrαl🔥. Si tu as des questions, n\'hésite pas à demander au staff du serveur.')
             member.removeRole(role);
             

             }
         else if(reaction.emoji.name === "❌" && user.id !== '463767052524584982'){
            member.send('---- {SERVEUR DARK FX} ---- \n \n Tu as choisi de ne pas accepter nos règles, tu ne peux donc pas rejoindre notre serveur. Si tu changes d\'avis, tu peux rejoindre à nouveau sans problème. Bonne journée! \n \n---- {SERVEUR DARX FX} ----') 
            setTimeout((function(){member.kick();}), 2000);
            
            
            }
     });
})

//-----------------------------------------------------------------------------------------------------
bot.on('message', function(message){
    if (message.content === 'dpacks'){
          var embeddpack = new Discord.RichEmbed()

          .setTitle("Demande de packs")
          .setDescription("Ici se trouve la liste des commandes à écrire pour avoir accès aux commandes d'un certain pack. \n\nATTENTION, si vous choisissez un pack, assurez-vous de pouvoir payer, les payements seront à effectuer avant la remise des commandes. \n\nSi vous changez d'avis, il est aussi possible de vous désinscrire d'un pack sous réserve de demander à un administrateur. \nC'est eux qui feront le changement afin d'éviter tout abus (le désabonnement d'un pack alors que la personne a déja commandé quelque chose).")
          .addBlankField()
          .addField("Pack Bundle ", "commande: !dbundle")
          .addField("Pack Mega Bundle", "commande: !dmegabundle")
          .addField("Pack Modulable", "commande: !dmodulable")
          //.setColor("0x9315E1")//violet
          .setColor("0x08F3D3")//turquoise
          //.setColor("0xFF8000")//rouge/orange
          .setFooter("Pour plus d'informations, contactez les membres du staff.")
          message.channel.send(embeddpack);
         }

    //--------------------------------------------------------------------------------------------------------

    
    

})
    bot.on('message', (message)=>{

        var bundlerole = message.guild.roles.find('name', 'Client pack BUNDLE')
        var megabundlerole = message.guild.roles.find('name', 'Client pack MEGA BUNDLE')
        var modulablerole = message.guild.roles.find('name', 'Client pack MODULABLE')
        if (message.content === '!dbundle'){
         
            
            message.channel.send(`Hey, ${message.member.user.username} tu as souscrit à l\'abonnement BUNDLE. Tu as désormais la possibilité de passer des commandes dans le channel #🔵pack-bundle®-commande-💰💵💳.`)
            console.log(`${message.member.user.username} a souscrit à l'abonnement BUNDLE`)
            message.member.addRole(bundlerole)
             
        }

        if (message.content === '!dmegabundle'){
         
            
            message.channel.send(`Hey, ${message.member.user.username} tu as souscrit à l\'abonnement  MEGA BUNDLE. Tu as désormais la possibilité de passer des commandes dans le channel #🔵pack-méga-bundle®commande💶💳📦.`)
            console.log(`${message.member.user.username} a souscrit à l'abonnement MEGA BUNDLE`)
            message.member.addRole(megabundlerole)
             
        }

        if (message.content === '!dmodulable'){
         
            
            message.channel.send(`Hey, ${message.member.user.username} tu as souscrit à l\'abonnement  MODULABLE. Tu as désormais la possibilité de passer des commandes dans le channel #🔵pack-modelable®-commande-💰💵💳.`)
            console.log(`${message.member.user.username} a souscrit à l'abonnement MODULABLE`)
            message.member.addRole(modulablerole)
             
        }
     
    })

