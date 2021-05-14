module.exports = async (client) =>{
  name: 'serverinfo',
  description:"serverinfo",
    const guild = client.guilds.cache.get('842380313945833492');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('842489210028294185');
        channel.setName(`Всего участников: ${memberCount.toLocaleString()}`);
        console.log('Обновляю количество участников');
    }, 5000);
}
