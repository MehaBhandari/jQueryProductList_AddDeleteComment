var newProduct ={};
var productList = [{
    productName: "Bottle",
    productImg: "https://d34kame2p3gj5k.cloudfront.net/media/uploads/2018/09/05154812/bikini-pink-25oz-dtm.jpg",
    barcode: "0001_pink",
    price: '25'
},{
    productName: "Bedsheet",
    productImg: "https://images-na.ssl-images-amazon.com/images/I/910GfTK5XcL._SL1500_.jpg",
    barcode: "0002_blue",
    price: '250'
},{
    productName: "Guitar",
    productImg: "https://shop.r10s.jp/guitarplanet/cabinet/yamaha/cpx5003_all.jpg",
    barcode: "0003_black",
    price: '25000'
},{
    productName: "Dinner Set",
    productImg: "https://m.media-amazon.com/images/I/71eragwTDPL._AC_UL480_FMwebp_QL65_.jpg",
    barcode: "0004_white",
    price: '2500'
},{
    productName: "Sports shoes",
    productImg: "https://n1.sdlcdn.com/imgs/i/9/x/large/Duke-Gray-Running-Shoes-SDL992370728-1-59fef.jpeg",
    barcode: "0005_grey",
    price: '3500'
},{
    productName: "Coffee Mug",
    productImg: "https://m.media-amazon.com/images/I/61BMbiVNu7L._AC_UL480_FMwebp_QL65_.jpg",
    barcode: "0006_black",
    price: '100'
},{
    productName: "Laptop Bag",
    productImg: "https://images-eu.ssl-images-amazon.com/images/I/312dXUNF8uL._AC_UL390_SR300,390_FMwebp_QL65_.jpg",
    barcode: "0007_black",
    price: '600'
},{
    productName: "Pen Set",
    productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9NsY7tD6B_JFEaFwgbVAJXriYpugSOePqszMm6dCQ1fKNloUU&usqp=CAU",
    barcode: "0008_blue",
    price: '70'
},{
    productName: "Sofa Set",
    productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL7aj6KEjegfwVqkLWn8FlQfwQyeDUjJANw67zWR_FDf1EanQ8&usqp=CAU",
    barcode: "0009_white",
    price: '15000'
},{
    productName: "Tiffin Box",
    productImg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBAPDxIVEA8PFRAPDxAQDxUVDw8PFREWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQGisdHR0tLS0tLS0rKy0tLS0tKy0tLS0tLS0tLSstLSstLS0rLS0tLS0rLS0tLS0tKy0tLSstLf/AABEIANgA6QMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEDBAUHBgj/xABNEAACAQIBBggICAwFBQAAAAAAAQIDBBEFBhIhMVEHE0FxgZGhsSMyUmFykrLRIkJigoOiweEUFSQzNENEU3OTwtIWVGPD05SjpLPw/8QAGwEBAQEAAwEBAAAAAAAAAAAAAAECAwQFBgf/xAA8EQEAAQICBQkGBAYDAQEAAAAAAQIDBBEFFDFRkRITFSFBUmGh0TJCcYHh8AYzscEWIiNTYpI0Q6LxJP/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ5Ja3qQI62LVynRh41WC55oxNyiNsuanD3atlM8FLy5b/vY9GL7kZ563vb1O/wB2Vc84bdfH+rL3Em/RvajA35939Goyhwh2NCWhUlUUvNbzwfM8MH0E1ijsc0aLv5ZzlHzhhS4VMnr99/IY5+N0nRtyNtVP+wXCpk/fVX0LJrEbpXou52V0/wC0L6fCZk57alSPPQn9iJrVvtcnQ2Kn2YifnDd5OzltbiHGUquMORypzjjzaUVj0HJTfoq2S6t3AX7VXJrp6/jE/pLMjlKi9lSPS8DXOU73DNi5Huyup3EJeLKL5pI1FUS45oqjbC0rIxAAAAAAAAAAAAAAAAAAMW9yhSoLSrVI01yaTwb5ltYGprZ5WUf1uk90ac/cJWIay6z+or831yUu7A45mvsjzc9FNn3qp4NHe56VJ46NVxW6MUu3DE4KqcRPg7tuvA07YmflLQXeUuNeM6jn6Um+861WFu1bf1ejb0phLcZUxMfJVTuYL4wjBV+DVWmbE9k8Pqy6eVaa+N2G4wle+HXq0rZnsny9UvK1PyuwuqV74Z6Vs7p8lF7dUa0HTqPGLaexpprY009RqjD3KZziYcd3SGHu08muiZj5NPUyXbvZWmuiL+w7Ec74ebz51WdnKjgqjkijjrry6Ir3lzu7o4z6JFOG71XCPVnWthaxacqk54NPBtKOK34L7TFcXaoy6nPZqwlqqKo5UzHhD0X48pteNh0HBq9zwdvX7Hj9/NCyvD94u33E1e54N9IYfx4GWU4clRdvuGr3V1/DdufBl2+XHHxaqXNJosW70f8A1x1YjB1bf0ls7bOeov1sZeZuLOSJvx2fo4KowdWycuLbW2dKfjqL88ZpdhyxXX20uvVZs+7W21tlelU+Movc2jkirN1qqMu2JZ0KilsafM8TTBgAAAAAAAAAAA0+dWWPwK2nWSTm8IUk9jnLlfmSxfQBxXKF/Uqzc6knOctspPWwMNzkwKpSYEYsBXiAskwEknvArae8BHjvARzlvAV1HvAXjZbwI46W8CVXlvAn8IlvYDxupb2BZG8lvAyKeUJrlAzKOV5rlYG0scv1E/Ga5mB0nMrOOVfwNV6UsMYTe14fFe/nA9gAAAAAAAAB5TPDO38BcadOKnUa0npY6MVyaltJM5NU05udZYz3q32NvcU4aGqpHQ0ozi1qxUk/Phs5TqXr9dEZw9jBYGzfq5NWefxar8Gi9a0l87E6muXfDg9XoTCxv4odqt8vW+4a5d8OC9CYXx4qZ2q3y9b7hrt3w4NRoPCePFU7ZeVLr+4a7d8ODXQWE8eKt2/ypda9w1274L0DhP8ALiV2/wAqXWvcTXrvgdAYTx4/RW7b5Uute4uvXfBOgML/AJcfoV23ypdnuGvXPBnoDDf5cfoSdu+ST7PcWMbc8GZ0DhuyauP0Y8rapyTXTFHJGOnth16tAUdlUkVtV5Zx9X7y69O5mNAR3zq3fLLHmiTXa+yG40DZjbXPkh0flPs9w1yvdCToOx3qvL0RxXyn1IuuV7oToOz3qvL0HFPyuxDXat0J0Ha78+SOLflfVRdcq3QnQdvvz5JUHv8AqjXatydB2+/PCE6Mt/1fvGuz3U6Co788I9TrS3r1fvGuz3fNOgaf7k/6/VfRlLyl6n3jXv8AHz+ix+H8/wDs/wDP1elzey7GyqRr1XKpGnjJU4U4xxaWrGTk8F0Fox3KnLk+bF7QM26eVzkZfD6y99kvhRtayjpU6lNy27JRjr36seo7lNefY8a5Zimeqc3uaFWM4xnB6UZpSi1saaxTNuA4AAAAABynhQo43cXycXHExU5be1zO/quFeEo4YYSi092pnXm1FyJpnqenTipwtdFymM9sZPUZLsKtZRwlCLaUsHCWpPZrxOHUP8vJ3P4g32/P6N9bZm3FRaqtHpVT7yahPeWNP09zzXS4PLvknQfzqi/oJqE724/EFHc8/opqcHV9yfg7+nmv9sahO9qPxDb7k8foplwd5R5I2/8A1M/+ImoVb24/ENruSqlweZR8i3/6qX/ENQq3r/ENruT9/JrbzNO9peNCjq3XLf8Atk1Crf8AfFf4hs92fv5NRcWdan40IdFbH+gmoV7/AL4r/EFjuz9/JobzOCnSk4OLlKOqWhLFJ7sWkWMDXvhKvxBYj3Zn78cmM856XkT+r7y6jXvhjp+x3KvIv+JKXk1OqPvLqVe+E6ew/dq8vVH+JKXkz6o+8alXvhOnbHdq8vVmWOUI18eLi21ti3FNLfrZJwdyG401hp25w2FOzqy2Um/n0/7hqlxemMN48F8MkXL2UJfzKP8AeNUuHTGF3zwWxzfu3+zy/m0f7xqtw6Ywu+eC2Ga17LZbvprUP7yarcTpjDb54MunmNlCWy2/8ih/eNVuL0xhd88DTzGv465UEvp6P2TGqXPuVjTGF3zwIs2bmPjQivpYPubJODuzu4tRpvCR2zwaPORyoJ0pr4U4vBp4rB4o5LODrpqiZydXG6as3rVVFETnPUXJWpR5kd2l4FyX0RmcvyC1x/drvZyw68tyAAAAAAcy4UF4eD/017TM1OW3tcqvKDqVYqOGKUm8XzI6/O0285qejqtzE8mi3lnHX1vdZHu6dPx3hgoJam9i17Cxi7W/ylidD4uPdz+cer1uTM5LWPjVlHnhP3Gtatd5xzovGR/1z5ere0s67L/M0umTXei6xa70M9G4v+3VwNLO2xW26peviWL9ufejizOAxUf9dX+sq5Z65PW27pet9xqLtE+9HFnU8R/bq/1n0Y9xnzk7B4XlL1n7i8unfDOq3+5Vwn0eQyxnXZyx0bmk+aT9w5Ub2eYux7s8JeDy7l+joycJqbweioYybfJyF5Ub2ear7s8Jc0dKXLGXUxyo3nNV7p4F4qXkvqY5Ubzm690ji3ufUM4TkVbkaD3PqGcHJncz8iXPE1ozlio61JpPY1uGcHJnc97Z5boLDGtBc8hnCcmdze2ecVry3FJc9RFOTO5tbfOOz/zVH+dH3jM5M7mytsvWr2XFF/TQ94zOTO56PJ+VqLWqtTfNVj7yZxva5urdPAZQynSafhaf8yPvJyo3rFq53Z4S87eXlNp4VIP56HLp3w1GHvT7k8Jc7z7pupxbgnLBTxa1pLFPb1medo3w1qt+Izmico8GJkxal0CGK5fROaawsbX+FDuORxNsAAAAAAc14Ul4an/D/qZmpyW3MqT8M/RftI8/E+y+j0V+b8m5xOg99VUkRuIY05EckQqkyNEbKZlxDOZXIuSTJJTLkzNSuUjWTjmojm9/aXJmapLpP/5jJnOUaT3lM5GkMkzkaQyMxiFzkY+cGcjEmRnI0VuXUXNc5PGC3dhG4mWXbR1nHLlpbPKv5lejPuOxY9qHlY2f6df32NNk3ZHmR68PjKn0VmysLK1X+jS9hG2GzAAAAAAOb8Ki8JR88Je0ZqcltyxSwuEt8Zd8To4n2Je/ouf60R4T+zdKWpHnPpMlNRkckMeTI5IVyIkkbKklZWVcmVmSNmmZIysSRlYLiAFZABiFBBIUAMiLCyJG4ZlqtaMS5o2MrLtTCjLzQl2o7WHj+eHj6RnKxXPxazJ2xcyPVh8fU+jsgLC0tl/o0f8A1o2wzwAAAAADnXCsvhUH8mp3ozU3Q5LN/lNPzxqLuOniPYl7mjZ//RR8J/ZvIvUjzH1PaqmRuFEjLkhVIJJGVkrKkkZpmVcisSRlYkjKyhlZQUAAQSFBBIUyCwsiZbpZtntRjtc0bJGcU/BS9FLrZ28LH88PE0tOWHqYuT9i6D1IfJVPpLJCwt6C3UqS+ojbDLAAAAAAOe8K6/R35qq7Ymam6HH6v6TS+k9k6l/2Kns6O/5Fv5/o3tPYjy31varmRuFEjLauQSSMrJWVJIzTKuRWJIysSRlZKzTKAiQoIACQqUQSg1C2BlulnWe1GO1zx7MqM5ZeDl8xfWR3cJ7TwNMzlZJYcnQenD5Sp9KZPWFGkvkQ9lGmWQAAAAAAeA4WF8C2f8VeyZqboccrL8opfSeydS/7FT2NH/8AIt/P9G8gtSPLfXkqEahRIzLauTLCSRlZKypJGGZVyNOOSMrMkZWSlZlBUAEgAVJAIKZEWFsDLkhnWe1GO1ze6xs5fzb9KHtI7+E9p89puf6XBOT1rXQejD5ep9K2ywhBboxXYjTK0AAAAAA8JwrLwVu/lVF9WJKmqHGqn6RS+k9k6eI9ip7Ojvz6Pn+jdw2I8t9cqqEbhTIy2qkyoVlZI2VmSMrMkkViSMrMkZWSlQFQAAAAEEhTIiwtgZlyQzrPajHa5vdlRnIvB/Op+0ehhNr5vTf5cfI2TV8KHPHvR6EPmZfStLxVzLuNIYAAAAAA8RwqR/J6L3Tl2xJU1S4nc1lCvScngm5xxezFx1HVvUzNFWT1cDcpov25qnKOv9G9i9Sw1+c8mX2UdfWqqEckKJsjSpsMyVs0yVsJMkbNMTJGVmSMMyVlZQVEBAAABQEEoKZEVZAy3Sz7HajHa5/dY+csvgYfLgu09HB7XzOm5/lj4wuyOsalJb5Q9pHfh83L6TjsRpEgAAAAAHi+FLD8Fp7+M1eqyS1S4LnD8T0vsZin2nNc9iHpMgW1OShFx1OEW8G022ljrWvlLVbpq9qM2bWIu2vy6pp+EvZWWatvVaTdSOPk1MfaTOCcHZns83fo01jKPfz+MR6NlU4LqUtdO6qR9OnCS7NE45wFHZMu3T+Ib8e1TTPGP3YNXgoqrxbuEvSt5R7qjMahHec8fiLfb/8AX0Ydbgtu14tWhLpnH+lmZwNXZLcfiC1O2iY+bAuODm/h+4fNcNd8UTUq98OSNO4aeyrh9Wpuc1buG2EH6Nem+9mdUuw301hZ7Z4S1lfJ1aHjU2uadN90hqtzc1GlsJPv+U+jVXN/TpycJy0ZLatWK6iatc3HSeF76n8bUfLXUXV7m5Ok8L30fjaj5fYxq9zcnSeF7/lKPxtR8vsZdXubk6Twvf8AKVlC9hPxMZYbdGLZdXubk6Tw3e8pZdOjUl4tKpLmgNWubk6Uw3e8mVTyPdS8W2qvoiu+RdWrSdKYfeyqeauUJeLaT6alFd8y6rWx0th/FlUsyMoy228Yenc0v6Wy6pWk6ZsRvlkRzDvfjuhD6aUn1KBdTne4qtOURsonj9FizIrLxrinH0aUpd8kajBR2y4507V7tHmdZtKGt15vfoQhBduk+03GDtxt63BXpzFVRlTlT8vV5zOywjRdNwlN6bblpzctcWsH2s7FNumiOqHmXcRcvTnXObLyCsa1Bb6lJfXRYcUvpE0gAAAAAAOfcLVbCFvDe6kurRRJapcgnFSrRUkmsJ6msVsR1b0zFMzD1dH001XaYqjOOttrRqk04rDBYJcmB06cZcp29b3Lmg8Lc66Ymn4T+05vRZPzt4rDTpYpcsZ6+pr7TljSG+nzdOv8OT7lzjHpP7PWWPCRaYeEVWD/AIel7LOanHW525w6degMVGzkz8/VsqfCFk5/r3H0qFZf0nJGKtd516tD4yn3M/hMT+67/G+T3suqa9LSj3o3F63PvQ4KtH4qnbbq4S1uUc7LOSwjdUX9IvtNRconZMOGrDXqdtFUfKXlcpZbt3jhXpvmqx95rNxTTMbYePyzlmjGMpcZB4J4YSTbfmSKznDl05Ntt629be9vaFKAAAGfkS4VOtGTeEXjFvkwe/pwA6Zkm7hq+HH1kDN7DJ15T1eEh68feEzh6OyuoPZOL5pILmzqleCWuSXPJDNYiZ2NTe5Rox21YLnqR95ma6Y7XJTYu1bKZ4S0l3l61WPhoPzRek+zExN+3Ha56dH4qrZbn9P1aavl6jLVBuXzGu/A4qsZajxdu3oTFVbYin5+mbS5xUY1Yqo2/Bwk4x5MduL7BRiOcnKIyTEaM1eiaqqs5YWT5uMoSW2LjLpTTOzDypfSlCelCMvKSl1rEqLAAAAAADnvCfk+tXnb8TSnUSjNNwi2k21q1ElYeAWaN2uMrToTpxoxx+FHDTcpRjguZNvoOrfieRL1dHVUxepznew5xa1PUzyJfbUbIVyZltVJlZmSNlZkjZpmSuRcmcytjJM5I2ViSOK3LqNZyxNMbiOnHcvVRYqnexzdG6OBeKj5MfVReVO9Obo7scIQ6UfJj6qHKq3pzdvuxwgcVHyY+qhyp3nNUd2OEDiY+TH1UXlTvObo3RwCox8mPqocqd68indCVTjuXUiZysRklQW5dRM2s5NGK3ElViI1DKtnrRiXNQ28rOdwuJh40oVGsdmEYOT7Is7mF2vE0tH9OWotFjgelD5Sp9GZDlpWts99Gi/+2jTLOAAAAAAADWZyfotbm+1HFe9iXZwf59DhN8/hs8Kp+hWvZhiSZG5IysSrZWZIzTJWVkrCSVhkrKhWVlBQBAEBRAEkVIEojR0RqGRbvWYlzUOu8F6TjPUsUlg8Na2YnoYLtfMadziql7Z5PovbSp69vg4+49B89myIrDUti1ICQAAAAAAA1ecr/JK3or2kcN/8uXawX59HxcIvfGZ4c7X6Db9mGI2RqSsrJGVkjKzJWVCsrMoYZKyoRlZQVEBAUAABJFSBJGjIir6DMy5aNrqvBXW+FOO+L7GjuYGeuYeBp+jqpnxdJPTfMAAAAAAAAADDytQ4yhVhyyhLDnwxRi5GdMw5sPXyLtNW6XBMpQwmzwKn6HZnOmGvkG5K2VkjZUKwzJWVCsqSVhkrKyUrKCogqAAAAACSKlEUyIq2ltMy5KNrqnBPRbnUnyRhh0tr7zt4GP5pl4n4gryopp3y6aeo+WAAAAAAAAAABxrP3JDt7iWC+BP4cH5n7meLibfIrndL7jRGKi9ZjfHVLxszrw9SpS2accygqZlbDKMShcQzmhsqFYQrKzKGVlBQAAAAASFBBKJKwyLaOLRipzW463d+DrJboWcZSWEq2E/m4fB9/Sepg7fJt573yGmcRzuImI2U9Xq9Sdt5IAAAAAAAAAANNnPkON7RdPUpx105Pke5+ZnBfsxcpy7XdwOMnDXeVtidrh2Wcm1LepKnUi4yi8Gtq60eNVTNFUxL7q1eov0RXROcS1ciwSRsMlZUzDYTMrYZQURiVClZBUQBARIAFAEYhM04gPAzLdPW9xweZryu6qqTi/wem05yw1Sa+ImclizN2rwh1dJY6MLa5NM/z1bPDxdthHBJLUksEtyPYfFTOfXJgAAAAAAAAAAAAPKZ8Zqq9hxlLVcQWrk4yPkt79x1MTh+cjONsPX0XpLVauTX7E+Xi4tf2s6U5QqRcZxeEoyWEk/OeTsnKX2PKiumKqZziWFI045I2VlDZUzLiXJM0YhM0YlTNGJWc0YgRiAYhEYlBpAzGkDNGkEzNFkah6rMnNipf1UorRowa42q1ioryVvk9xbdqbtWUbHHisZRhLfKq9qdkb/H4O92VpCjThSprRhTSjFbkj16KYppimNkPirlyq5XNdXXMrzTAAAAAAAAAAAAAAWcsAPL502FvdRwuKSbXi1E3GpHmku56jiuWaLntQ7eFx1/DT/Tq6t22ODjmcuTFa1MKcpTpPxZSilg9za1dx5t6xNuerrh9TgdIU4mjryiqOz94+5aVzOLJ3OUjTW8ZJyoRpFyTNDkVMyuQTMuJckzQ2ERiVM4Q5DJM0aYyOUNNDJOXBXVReSzN2D0cZyUY63JpLnY5JFyJjPsdKzX4PqbcZ3lXTWp8TRxSfPUevqS5ztU4TvS8m7prLqs0/OfT14OuZNtqdGnGnRgqdOKwjGKwSO3TTFMZQ8S7dru1TXXOcyyzTjAAAAAAAAAAAAAABDQGtv8kqq8W+bcgNNd5q6Sa1ST5GtpMh5u/wCDWnPFxg4PfCWC6thw1WKJ7HetaSxNvqirOPHr+rQ3fBdVX5uo+adPHtTOKcLHZLuUaaq96iJ+E5erVXHB1ex8VQl0uPejM4are56dMWp20zHCWurZlX8f2dv0akPtaM6vW5I0nh57Zj5MWea18v2ap0aL7mOYr3L0hY7K/KfRjzzevV+z1fUHM1bmZx1rvq3kK9/y9X+Wy8zO5mcbR3/vgFm/evZbVfULzM7mNeo76yOa1/LZbVOnRXeyxZncxOOo7zIo5kZRl+ocfSqwXc2a5mXHOOo3zLYW/Btey8Zwh0yl3JFiy45x9PZEy3FjwVy1cbUlLzQgorrbZuLEdriqx9XuxEeb1WSMw4UMHTpYS8qTxl1tnJTREbIdW5fuXPbnN6awyFOm008DTiejpRwXnKHAAAAAAAAAAAAAAAAAAAAAgAwAjQW5ARxUdy6gI4mO5dQEcRHyV1ATxEfJXUAcTHcuoCeLW5dQE6K3ATgBIAAAAAAAAAAAAH//2Q==",
    barcode: "0010_red",
    price: '500'
}];

$(document).ready(function(){
    var NewproductList = [];
    NewproductList = productList;
    $.each(NewproductList, function( index, value ) {
        $("#productData").append("<div class='col'> <div class='card'> <img class='card-img-top' src=" + value.productImg + " style='width:20%' /> <br/> <div class='card-body'> <h5 class='card-title'> Product: " + value.productName + "</h5> <p class='card-text'>Barcode: " + value.barcode + "</p> <p class='card-text'> Price: Rs " + value.price + "</p> <button id='deleteBtn' class='btn btn-primary'>Delete</button> </div> </div> </div>");
        // $("#productData").append("<img src=" + value.productImg + " style='width:50%' /> <br/>");
        // $("#productData").append("<strong>" + value.productName + "</strong><br/>");
        // $("#productData").append("<strong>" + value.barcode + "</strong><br/>");
        // $("#productData").append("<strong>" + value.price + "</strong><br/>");
      });
      $("#deleteBtn").click(function() {
        alert('Hiii');
    })
    $("#submitButton").click(function() {
        var name = $('#name').val();
        newProduct ={
            productName: $('#name').val(),
            productImg:  $('#imageUrl').val(),
            barcode:  $('#barcode').val(),
            price:  $('#price').val()
    
        };
        NewproductList = productList.push(newProduct);
        alert("Thank you for adding product!"); 
    }); 
});

