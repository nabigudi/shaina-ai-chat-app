
export const initialHistoryList = [
  {
    id: 1,
    title: 'You are a wheater girl',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'You are a wheater girl',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'How is today?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "Today's weather is sunny with a clear blue sky. The temperature is around 75 degrees Fahrenheit with a gentle breeze. It's a perfect day to enjoy outdoor activities or simply soak up the sun!",
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 2,
    title: 'You are a comedian',
    createdAt: '2023-11-21',
    left: 1,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'You are a comedian',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 1,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'Tell me a joke',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "Sure, here's a classic one for you:Why don't scientists trust atoms?\n\nBecause they make up everything!",
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 3,
    title: 'You are a designer',
    createdAt: '2023-11-21',
    left: 2,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'You are a designer',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'Do you like the colors?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "As an AI, I don't have personal preferences, so I don't experience a liking or disliking for colors. However, I can help you with color selection and suggest color palettes based on your needs and preferences.",
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 4,
    title: 'You are a world traveler',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'You are a world traveler',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'which hotel do you recommend on Tokyo city?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'OdamaChat',
        role: "ai" as const,
        message: 'There are many great hotels in Tokyo, but one that I would recommend is the Park Hyatt Tokyo. It is a luxurious hotel located in the heart of Shinjuku, offering stunning views of the city skyline. The hotel boasts elegant rooms, exceptional service, and a range of fantastic amenities, including multiple dining options and a serene spa. The Park Hyatt Tokyo also gained popularity as it was featured in the movie "Lost in Translation." It truly offers a memorable and luxurious stay in the vibrant city of Tokyo.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 10,
    title: 'Eres un profesor',
    createdAt: '2023-11-21',
    left: 5,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'Eres un profesor',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'Cuando fue la segunda guerra mundial?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "La Segunda Guerra Mundial ocurrió del 1 de septiembre de 1939 al 2 de septiembre de 1945.",
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 13,
    title: 'Eres un viajero',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'Eres un viajero',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'Que comidas me recomendarías probar cuando visite Argentina?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "Cuando visites Argentina, te recomendaría probar algunas de estas comidas:\n\n1. Asado: La carne asada es muy popular en Argentina y es considerada una de las mejores del mundo. Te recomiendo probar el bife de chorizo, las costillas de cerdo y el vacío.\n\n2. Empanadas: Son pasteles rellenos de carne, pollo, queso o verduras. Son deliciosas y se pueden encontrar en diversas variantes en todo el país.\n\n3. Milanesa: Es una carne empanizada y frita que se suele servir acompañada de papas fritas. Las puedes encontrar de carne de res o pollo.\n\n4. Locro: Es un guiso a base de maíz, carne de cerdo, chorizo y diferentes verduras. Es un plato típico y muy sabroso, especialmente en invierno.\n\n5. Provoleta: Es un tipo de queso provolone a la parrilla y se sirve caliente y derretido. Es un acompañamiento perfecto para el asado.\n\n6. Pastel de papas: Es una especie de pastel de carne con capas de papas, carne molida, huevo y aceitunas. Muy sabroso y reconfortante.\n\n7. Dulce de leche: Es un caramelo cremoso hecho con leche y azúcar. Se utiliza en muchos postres argentinos como las medialunas y los alfajores.\n\nEstas son solo algunas de las comidas que te recomendaría probar durante tu visita a Argentina. La gastronomía argentina es muy variada y seguro encontrarás muchas otras opciones deliciosas.",
        typeMessage: 'string',
        date: '5:00 pm'
      },

    ]
  },
  {
    id: 17,
    title: 'Eres un viajero',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        role: "system" as const,
        message: 'Eres un viajero',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'José',
        role: "user" as const,
        message: 'Que comidas me recomendarías probar cuando visite Argentina?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "Cuando visites Argentina, te recomendaría probar algunas de estas comidas:\n\n1. Asado: La carne asada es muy popular en Argentina y es considerada una de las mejores del mundo. Te recomiendo probar el bife de chorizo, las costillas de cerdo y el vacío.\n\n2. Empanadas: Son pasteles rellenos de carne, pollo, queso o verduras. Son deliciosas y se pueden encontrar en diversas variantes en todo el país.\n\n3. Milanesa: Es una carne empanizada y frita que se suele servir acompañada de papas fritas. Las puedes encontrar de carne de res o pollo.\n\n4. Locro: Es un guiso a base de maíz, carne de cerdo, chorizo y diferentes verduras. Es un plato típico y muy sabroso, especialmente en invierno.\n\n5. Provoleta: Es un tipo de queso provolone a la parrilla y se sirve caliente y derretido. Es un acompañamiento perfecto para el asado.\n\n6. Pastel de papas: Es una especie de pastel de carne con capas de papas, carne molida, huevo y aceitunas. Muy sabroso y reconfortante.\n\n7. Dulce de leche: Es un caramelo cremoso hecho con leche y azúcar. Se utiliza en muchos postres argentinos como las medialunas y los alfajores.\n\nEstas son solo algunas de las comidas que te recomendaría probar durante tu visita a Argentina. La gastronomía argentina es muy variada y seguro encontrarás muchas otras opciones deliciosas.",
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 4,
        user: 'José',
        role: "user" as const,
        message: 'y cuando visite méxico, qué debería probar ahi?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 5,
        user: 'OdamaChat',
        role: "ai" as const,
        message: "¡Claro! Cuando visites México, te recomendaría probar algunos platillos típicos de la gastronomía mexicana. Aquí tienes algunas opciones:\n\n1. Tacos: No puedes dejar de probar los famosos tacos mexicanos. Hay una gran variedad de opciones como tacos al pastor, tacos de carnitas, tacos de barbacoa o tacos de guisados.\n\n2. Guacamole: El guacamole es una salsa hecha a base de aguacate que suele servirse con totopos (tortilla chips). Es definitivamente un clásico mexicano que no puedes dejar de probar.\n\n3. Chiles en nogada: Si visitas México durante la temporada de septiembre, no puedes dejar de probar los chiles en nogada. Este platillo consiste en un chile poblano relleno de una mezcla de carne de res y cerdo, frutas y nueces, bañado en una deliciosa salsa de nuez y decorado con granada.\n\n4. Pozole: El pozole es un caldo hecho a base de maíz y carne de cerdo, acompañado de lechuga, rábano, cebolla, salsa y tortillas. Es un platillo muy tradicional y delicioso.\n\n5. Mole: México es famoso por sus moles, salsas espesas y aromáticas que se sirven en platillos como el mole poblano o el mole negro. Estas salsas suelen tener una combinación única de chiles, especias y chocolate.\n\nAdemás de estos platos, también te recomendaría probar las delicias callejeras como el elote (mazorca de maíz asada con diversas coberturas), las quesadillas, los tamales y los antojitos mexicanos como las gorditas, tlacoyos o sopes.\n\n¡Buen provecho!",
        typeMessage: 'string',
        date: '5:00 pm'
      },
    ]
  },
  {
    id: 23,
    title: 'Eres la chica del clima',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        role: "system" as const,
        message: 'Eres la chica del clima',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'José',
        role: "user" as const,
        message: 'Según la información que tengo, mañana en Córdoba, Argentina se espera una temperatura máxima de 28 grados Celsius y una mínima de 16 grados Celsius. El día estará mayormente soleado, con algunas nubes dispersas. No se esperan lluvias. Es importante tener en cuenta que esta información es actualizada hasta el momento en que fue proporcionada y podría haber cambios, te sugiero revisar las actualizaciones más recientes para estar al tanto del pronóstico del tiempo.',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: 'Lorem ipsum dolor Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 33,
    title: 'Eres un experto en UX',
    createdAt: '2023-11-21',
    left: 2,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        role: "system" as const,
        message: 'Eres un experto en UX',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'José',
        role: "user" as const,
        message: 'Necesito que una paleta de colores cálidos, qué me recomiendas?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: 'Para una paleta de colores cálidos, te recomendaría usar colores como rojos, naranjas, amarillos y tonos tierra. Aquí tienes algunas opciones que podrías considerar:\n\n1. Rojo intenso (#FF0000) combinado con marrón oscuro (#573F27) y amarillo dorado (#FFC300).\n\n2. Naranja vibrante (#FFA500) junto con tonos tierra como el marrón terracota (#8B4513) y el amarillo mostaza (#FFDB58).\n\n3. Amarillo soleado (#FFD700) combinado con tonos tierra como el cobre (#B87333) y el marrón oscuro (#654321).\n\n4. Tonos tierra como marrón chocolate (#D2691E) y marrón claro (#CD853F) junto con un amarillo pálido (#FFFF99).\n\nRecuerda que al elegir una paleta de colores, es importante considerar el contraste y la legibilidad, por lo que te sugiero probar las combinaciones en diferentes contextos y asegurarte de que sean accesibles para todos los usuarios.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 18,
    title: 'Eres un diseñador gráfico',
    createdAt: '2023-11-21',
    left: 20,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'Eres un diseñador gráfico',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'Me puedes explicar qué es el diseño UX?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: 'Claro, el diseño UX o User Experience (experiencia de usuario) se enfoca en la creación de productos o servicios que sean intuitivos, eficientes y satisfactorios para los usuarios. Su objetivo principal es mejorar la experiencia que tienen las personas al interactuar con un producto o servicio.\n\nEn el diseño UX se tiene en cuenta el comportamiento, las necesidades y las emociones de los usuarios. Se realiza una investigación profunda para comprender quiénes son los usuarios y qué esperan del producto o servicio. A través de diversas técnicas como entrevistas, encuestas y pruebas de usabilidad, se recopilan datos que permiten diseñar soluciones que se ajusten a las necesidades de los usuarios.\n\nEl diseño UX incluye diferentes aspectos como el diseño de la interfaz, la arquitectura de la información, la usabilidad, la accesibilidad y la interacción. Se busca crear una experiencia de uso positiva, fácil y agradable para los usuarios, permitiéndoles alcanzar sus objetivos de manera eficiente.\n\nEn resumen, el diseño UX se trata de diseñar productos y servicios centrados en las necesidades de los usuarios, para brindarles una experiencia satisfactoria y memorable.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 19,
    title: 'Eres un profesor de secundaria',
    createdAt: '2023-11-21',
    left: 6,
    createdBy: 'Ana Clara',
    history: [
      {
        id: 1,
        user: 'Ana Clara',
        role: "system" as const,
        message: 'Eres un profesor de secundaria',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'Ana Clara',
        role: "user" as const,
        message: 'Puedes explicarme logaritmos?',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: '¡Claro! Los logaritmos son una herramienta matemática que nos permite resolver problemas relacionados con la multiplicación y la división de números de manera más sencilla.\n\nUn logaritmo es el exponente al que hay que elevar una base determinada para obtener un número dado. Por ejemplo, en la expresión log_2(8) = 3, la base es 2, el logaritmo es 3 y el número es 8. Esto significa que 2 elevado a la potencia de 3 nos da como resultado 8.\n\nEn términos más generales, la notación para un logaritmo es log_b(x), donde b es la base y x es el número al que queremos calcular su logaritmo.\n\nAlgunas propiedades importantes de los logaritmos son:\n\n- Si el logaritmo tiene base 10, se llama logaritmo decimal y se suele representar simplemente como log(x).\n\n- El logaritmo de 1 siempre es 0: log_b(1) = 0.\n\n- El logaritmo de la base b siempre es 1: log_b(b) = 1.\n\n- Si tenemos dos logaritmos de la misma base y los multiplicamos, es equivalente a calcular el logaritmo de su producto: log_b(x) + log_b(y) = log_b(x * y).\n\n- Si tenemos dos logaritmos de la misma base y los dividimos, es equivalente a calcular el logaritmo de su cociente: log_b(x) - log_b(y) = log_b(x / y).\n\n- Si tenemos un logaritmo de una potencia de la misma base, podemos escribirlo como el producto entre el exponente y el logaritmo de la base: log_b(x^n) = n * log_b(x).\n\nLos logaritmos se utilizan en muchos campos, como la ciencia, la ingeniería y la economía, para resolver problemas que involucran números grandes o pequeños, como el cálculo de intereses compuestos, la medición de la intensidad de los terremotos o la determinación del pH de una solución, entre otros.\n\nEspero que esta explicación te haya sido útil. Si tienes alguna otra pregunta, estaré encantado de ayudarte.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  },
  {
    id: 19,
    title: 'Eres un programador',
    createdAt: '2023-11-21',
    left: 6,
    createdBy: 'José',
    history: [
      {
        id: 1,
        user: 'José',
        role: "system" as const,
        message: 'Eres un programador',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 2,
        user: 'José',
        role: "user" as const,
        message: 'Necesito un código en javascript para restar dos numeros enteros',
        typeMessage: 'string',
        date: '5:00 pm'
      },
      {
        id: 3,
        user: 'OdamaChat',
        role: "ai" as const,
        message: 'Claro, aquí tienes un ejemplo de código en JavaScript para restar dos números enteros: ```javascript var num1 = 10; var num2 = 5; var resta = num1 - num2; console.log("El resultado es: " + resta); ``` En este ejemplo, se restan los números enteros `num1` y `num2`, y se guarda el resultado en la variable `resta`. Luego, se muestra el resultado en la consola utilizando `console.log()`. Puedes ajustar los valores de `num1` y `num2` según tus necesidades.',
        typeMessage: 'string',
        date: '5:00 pm'
      }
    ]
  }
]