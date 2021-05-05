# State

Dans React, un state est une valeure dynamique. J'ai des méthodes pour consulter / modifier cette valeure. Et dés qu'elle change, si elle est utilisée par un ou des composants, ils seront automatiquement mis à jour.


Pour gérer un state il existe 2 "méthodes" avec React. 

* La méthode avec des composants Class
* La méthode avec des composants fonctions

## Quelques généralités

Pour passer des informations entre des composants avec React, on n'a pas 150 possibilités.

* Un seul sens possible: de parent vers enfant
* Un seul moyen de communication: les props

Avec les composants Class (et Redux) quelques règles:

* Il ne peut y avoir qu'un seul state
* Ce state est forcément un objet
* Il ne peut s'appeler que state
* Il n'y a qu'un méthode qui permette de la modifier: this.setState

> Pour toutes ces raisons, en général, on placera le state et les méthodes pour le modifier dans le composant racine, afin de pouvoir partager aux composants enfants, via les props, soit des bouts de state, soit des méthodes pour le modifier.

![](passation-state.jpg)

## Les composants Class

Exemple de composant Class simple qui n'utilise pas le pouvoir de webpack.
On a besoin d'un constructor pour initialiser le state.
On a besoin de gérer nous même le "binding" de this dans nos méthodes.
En gros, c'est relou, on ne veut pas avoir à se coltiner tout ça.

```javascript
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
      prenom: 'tata',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log(this.state);
    // STRICTEMENT INTERDIT
    // this.state = { opened: false }
    // Je vais plutôt utiliser la méthode que React
    // me fourni pour le modifier
    // Cette méthode attend que je lui donne un objet
    // Et React va automatiquement prendre tout le contenu
    // de cet objet pour aller écraser le state original
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    // Je récupère ce qui se trouve dans this.state.opened
    const { opened } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <button
          onClick={this.toggle}
          type="button"
        >Toggle
        </button>
        {
          opened && <Currencies currenciesList={currenciesList} />
        }
        <Amount value={1.09} currency="United States Dollar" />
      </div>
    );
  }
}
```

Pour créer un state dans un composant Class:

* Il n'y a TOUJOURS qu'un seul state (this.state)
* Ce state est TOUJOURS un objet

Heureusement Webpack nous permet de palier à une bonne partie des problèmes de state / de this grâce à un plugin `@babel/plugin-proposal-class-properties`

Je peux désormais déclarer mon state et mes méthodes avec un =, et une fonction fléchée (pour les méthodes) pour avoir directement le bon contexte de this

```javascript
class Converter extends React.Component {
  state = {
    opened: true,
    prenom: 'tata',
  }

  toggle = () => {
    console.log(this.state);
    // STRICTEMENT INTERDIT
    // this.state = { opened: false }
    // Je vais plutôt utiliser la méthode que React
    // me fourni pour le modifier
    // Cette méthode attend que je lui donne un objet
    // Et React va automatiquement prendre tout le contenu
    // de cet objet pour aller écraser le state original
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    // Je récupère ce qui se trouve dans this.state.opened
    const { opened } = this.state;
    return (
      <div className="converter">
        <Header baseAmount={1} />
        <button
          onClick={this.toggle}
          type="button"
        >Toggle
        </button>
        {
          opened && <Currencies currenciesList={currenciesList} />
        }
        <Amount value={1.09} currency="United States Dollar" />
      </div>
    );
  }
}
```

### Challenge

Créer un composant <Toggle> qui contient le bouton présent dans App.
Ce composant doit recevoir par ses props une fonction qui permet de changer l'état du state (toggle).

Faire en sorte dans votre composant qu'au clic sur le bouton, la fonction que vous recevez par les props soit exécutée

**BONUS**

Faire en sorte que le composant reçoive un prop supplémentaire: l'état "opened" qui vient du state. Si opened est true, le bouton a une certaine apparence, sinon le bouton a une autre apparence