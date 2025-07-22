import React from "react"

function Gallery() {
  const images = [ "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/344854631_1389417124938927_2196884370234082894_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG7CQx3uLs05D4mugxUqkIzSy2QG8-b8AZLLZAbz5vwBmnqTOp6yIeD87Bwy4BL9e99bWwlMyVcHJUATOHh564q&_nc_ohc=Z0j-o3hCtPsQ7kNvwG1jZvl&_nc_oc=Adm-2XqPlqNjOpepvBDSe9SRlu7e9nIy14g_k6qGgU7AcHs0LJSUgPF9fPcwztE0e4E&_nc_zt=23&_nc_ht=scontent.faep24-1.fna&_nc_gid=IntcmT92GGthlD768pct_w&oh=00_AfFoPX5O-AO6BEJ0eWv5QEqgTF2YEGR2lXw9XI0qO-9GxQ&oe=680C3B37", "https://scontent.faep24-2.fna.fbcdn.net/v/t1.6435-9/39453551_2054567807896066_2571138427508490240_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEBBY2PWIkhEFyLfBbpWckvSeYh3VN6aV9J5iHdU3ppX2w0_4vAuiZUP_EmEG8KJ3ntJOr3tRbbVgj-4_WFLHeb&_nc_ohc=YLYe7TU9dFIQ7kNvwEgJAcJ&_nc_oc=AdlkAjt35mvpd-m5nHKyGXQFswQWcxY0l62x6aaaO7lbpcp5bnTYy1ZcwxoTnFFucQM&_nc_zt=23&_nc_ht=scontent.faep24-2.fna&_nc_gid=iBsTSQU0VRZidq0Kt8SiAw&oh=00_AfHnVCvkZx4vMqrmbKWi0XTFlA0BKY1W-Uyrp0V1Dy6Bww&oe=682DE390", "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/490464056_9999475903405177_3821577572618907435_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHcMuvlpIAaoAsuQWObow7KHozvYbXoMlgejO9htegyWAB7x6qj16RWSR58bQ5K58TfioD19zmQV3mWEJGE3WSv&_nc_ohc=noMoSZP7SmkQ7kNvwF4izov&_nc_oc=AdmG7V1ZkMmi6aOb7W34SVc2ozgSAnCCbY7-H_ndJuoykqAICNQahbM2wUuHGC-_d64&_nc_zt=23&_nc_ht=scontent.faep24-1.fna&_nc_gid=SILbSEfDye5WzTzmmMfNXw&oh=00_AfEddu-3Q1DmUVuZCS_VpLIhwOztIbsACmzK070goHVwDA&oe=680C5255", "https://scontent.faep24-2.fna.fbcdn.net/v/t39.30808-6/466129117_9090857274267049_734964319235849805_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFQwt344JDCztSHnuMlBYdDecX47E4I_h55xfjsTgj-HvHfiraYz8fgQT3nP5NNkDY-1FH7Wb9F_57wT1VXSOMm&_nc_ohc=EU-ZsDwm5oAQ7kNvwGbUQZl&_nc_oc=AdmgGtXW4_fHOi8-s-UefSwZNZS5ODDA_G3vEsgdUvxgs0yhaMaI6TzlRXYpKzFe5yg&_nc_zt=23&_nc_ht=scontent.faep24-2.fna&_nc_gid=PS2bvHNijxP90LDSxbTzVg&oh=00_AfG3v7JFqdGXY2sp_hx3UmIVCrJHogfJr2OUhA8YXM5SFw&oe=680C5AC6"
  ]

  return (
    <section style={ { display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" } }>

      { images.map((src, index) => (<img key={ index } src={ src } alt={ `Imagen ${ index + 1}` } style={ { width: "150px" } } />)) }

    </section>
  )
}

export default Gallery