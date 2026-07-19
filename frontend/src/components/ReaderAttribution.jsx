const countries = {
  uk: { label: 'U.K.', name: 'United Kingdom' },
  us: { label: 'U.S.', name: 'United States' },
  de: { label: 'Germany', name: 'Germany' },
};

export default function ReaderAttribution({ country }) {
  const details = countries[country];

  return <figcaption>
    <span>Early reader</span>
    {details && <span className="reader-country" aria-label={details.name}>
      <span className={`reader-flag reader-flag-${country}`} aria-hidden="true" />
      {details.label}
    </span>}
  </figcaption>;
}
