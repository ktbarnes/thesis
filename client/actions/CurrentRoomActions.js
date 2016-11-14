export const setCurrentRoom = (room) => {
  return {
    type: 'SET_CURRENT_ROOM',
    id: room.id,
    channelName: room.channelName,
    currentRoomToggle: room.currentRoomToggle
  };
};