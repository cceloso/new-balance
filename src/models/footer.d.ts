interface IFooterColumn {
  heading: string;
  items: IFooterLink[];
}

interface IFooterLink {
  label: string;
  link: string;
}