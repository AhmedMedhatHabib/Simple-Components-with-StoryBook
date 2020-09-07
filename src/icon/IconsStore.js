function IconsStore(icons)
{
    this.icons = icons;

    icons = {};

    this.getIcons = function() {
      return this.icons;
    };

    this.getIcon = function(name) {
      const iconName = `ic_${name}`;
      let requestedIcon = this.icons.icons.filter(icon => icon.properties.name === iconName);
      if (requestedIcon.length === 0) {
        requestedIcon = {};
      } else {
        requestedIcon = requestedIcon.pop();
      }
      return requestedIcon;
    };
};

export default IconsStore;
