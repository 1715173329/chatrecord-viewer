import styles from '../styles/SenderContainer.module.scss'
import SenderGroup from '../types/SenderGroup'
import SenderNameBubble from './SenderNameBubble'
import MessageBubble from './MessageBubble'
import noAvatar from '../assets/no-avatar.webp'

export default function SenderContainer({group}: { group: SenderGroup }) {
  return <div className={styles.container}>
    <div className={styles.avatarContainer}>
      <img
        src={group.avatar}
        alt={`头像：${group.senderId}`}
        referrerPolicy="no-referrer"
        onError={() => group.avatar = noAvatar}
      />
    </div>
    <div className={styles.mainContainer}>
      <SenderNameBubble name={group.username}/>
      {group.messages.map((e, index) => <MessageBubble message={e} key={index}/>)}
    </div>
  </div>
}
