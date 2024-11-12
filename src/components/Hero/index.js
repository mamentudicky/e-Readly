const Hero = () => {
  return (
    <main className="site-content">
      <section className="hero section center-content illustration-section-01">
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay={200}
              >
                Dicky mendellson Mamentu
              </h1>
              <div className="container-xs">
                <p
                  className="mt-0 mb-32 reveal-from-bottom"
                  data-reveal-delay={400}
                >
                  Fakultas Ilmu Komputer
                <p>
                  Jurusan Informatika
                  <p>
                    Tahun angkatan 2022
                  </p>
                </p>
                </p>
              </div>
            </div>
            <div
              className="
                                    hero-figure
                                    reveal-from-bottom
                                    illustration-element-01
                                "
              data-reveal-value="20px"
              data-reveal-delay={800}
            >
              <img
                className="has-shadow"
                src="images/hero-image.png"
                alt="Hero image"
                width={896}
                height={504}
              />
              <h1>yooo </h1>
            </div>
            <img
                className="has-shadow"
                src="images/hero-image.png"
                alt="Hero image"
                width={896}
                height={504}
              />
          </div>
        </div>
      </section>
      <section className="clients section reveal-fade">
        <div className="container">
          <div
            className="
                                clients-inner
                                section-inner
                                has-top-divider has-bottom-divider
                            "
          >
            <ul className="list-reset">
              <li>
                <img src="images/clients-01.svg" alt="Clients 01" />
              </li>
              <li>
                <img src="images/clients-02.svg" alt="Clients 02" />
              </li>
              <li>
                <img src="images/clients-03.svg" alt="Clients 03" />
              </li>
              <li>
                <img src="images/clients-04.svg" alt="Clients 04" />
              </li>
              <li>
                <img src="images/clients-05.svg" alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="features-tiles section">
        <div className="container">
          <div className="features-tiles-inner section-inner">
            <div className="tiles-wrap">
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
                                                    features-tiles-item-image
                                                    mb-16
                                                "
                    >
                      <img
                        src="images/feature-tile-icon-01.svg"
                        alt="Feature tile icon 01"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Join the system</h4>
                    <p className="m-0 text-sm">
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={200}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
                                                    features-tiles-item-image
                                                    mb-16
                                                "
                    >
                      <img
                        src="images/feature-tile-icon-02.svg"
                        alt="Feature tile icon 02"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Join the system</h4>
                    <p className="m-0 text-sm">
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={400}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div
                      className="
                                                    features-tiles-item-image
                                                    mb-16
                                                "
                    >
                      <img
                        src="images/feature-tile-icon-03.svg"
                        alt="Feature tile icon 03"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Join the system</h4>
                    <p className="m-0 text-sm">
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing section">
        <div className="container">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="section-header center-content">
              <div className="container-xs">
                <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                <p className="m-0">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
                </p>
              </div>
            </div>
            <div className="tiles-wrap">
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div
                      className="
                                                    pricing-item-header
                                                    pb-24
                                                    mb-24
                                                "
                    >
                      <div
                        className="
                                                        pricing-item-price
                                                        mb-4
                                                    "
                      >
                        <span
                          className="
                                                            pricing-item-price-currency
                                                            h2
                                                        "
                        >
                          $
                        </span>
                        <span
                          className="
                                                            pricing-item-price-amount
                                                            h1
                                                            pricing-switchable
                                                        "
                          data-pricing-monthly={34}
                          data-pricing-yearly={27}
                        >
                          27
                        </span>
                      </div>
                      <div
                        className="
                                                        text-xs text-color-low
                                                    "
                      >
                        Lorem ipsum is a common text
                      </div>
                    </div>
                    <div
                      className="
                                                    pricing-item-features
                                                    mb-40
                                                "
                    >
                      <div
                        className="
                                                        pricing-item-features-title
                                                        h6
                                                        text-xs text-color-high
                                                        mb-24
                                                    "
                      >
                        What’s included
                      </div>
                      <ul
                        className="
                                                        pricing-item-features-list
                                                        list-reset
                                                        text-xs
                                                        mb-32
                                                    "
                      >
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li>Excepteur sint occaecat velit</li>
                        <li>Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <a
                      className="
                                                    button
                                                    button-primary
                                                    button-block
                                                "
                      href="#"
                    >
                      Start free trial
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={200}
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div
                      className="
                                                    pricing-item-header
                                                    pb-24
                                                    mb-24
                                                "
                    >
                      <div
                        className="
                                                        pricing-item-price
                                                        mb-4
                                                    "
                      >
                        <span
                          className="
                                                            pricing-item-price-currency
                                                            h2
                                                        "
                        >
                          $
                        </span>
                        <span
                          className="
                                                            pricing-item-price-amount
                                                            h1
                                                            pricing-switchable
                                                        "
                          data-pricing-monthly={54}
                          data-pricing-yearly={47}
                        >
                          47
                        </span>
                      </div>
                      <div
                        className="
                                                        text-xs text-color-low
                                                    "
                      >
                        Lorem ipsum is a common text
                      </div>
                    </div>
                    <div
                      className="
                                                    pricing-item-features
                                                    mb-40
                                                "
                    >
                      <div
                        className="
                                                        pricing-item-features-title
                                                        h6
                                                        text-xs text-color-high
                                                        mb-24
                                                    "
                      >
                        What’s included
                      </div>
                      <ul
                        className="
                                                        pricing-item-features-list
                                                        list-reset
                                                        text-xs
                                                        mb-32
                                                    "
                      >
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li>Excepteur sint occaecat velit</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <a
                      className="
                                                    button
                                                    button-primary
                                                    button-block
                                                "
                      href="#"
                    >
                      Start free trial
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={400}
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div
                      className="
                                                    pricing-item-header
                                                    pb-24
                                                    mb-24
                                                "
                    >
                      <div
                        className="
                                                        pricing-item-price
                                                        mb-4
                                                    "
                      >
                        <span
                          className="
                                                            pricing-item-price-currency
                                                            h2
                                                        "
                        >
                          $
                        </span>
                        <span
                          className="
                                                            pricing-item-price-amount
                                                            h1
                                                            pricing-switchable
                                                        "
                          data-pricing-monthly={74}
                          data-pricing-yearly={67}
                        >
                          67
                        </span>
                      </div>
                      <div
                        className="
                                                        text-xs text-color-low
                                                    "
                      >
                        Lorem ipsum is a common text
                      </div>
                    </div>
                    <div
                      className="
                                                    pricing-item-features
                                                    mb-40
                                                "
                    >
                      <div
                        className="
                                                        pricing-item-features-title
                                                        h6
                                                        text-xs text-color-high
                                                        mb-24
                                                    "
                      >
                        What’s included
                      </div>
                      <ul
                        className="
                                                        pricing-item-features-list
                                                        list-reset
                                                        text-xs
                                                        mb-32
                                                    "
                      >
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                        <li className="is-checked">
                          Excepteur sint occaecat velit
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <a
                      className="
                                                    button
                                                    button-primary
                                                    button-block
                                                "
                      href="#"
                    >
                      Start free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;